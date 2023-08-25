import { useRouter } from "next/router";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import AXIOS from "../../services";
import MarketingLayout from "../../components/layouts/MarketingLayout/MarketingLayout";

import authStyle from "./login.module.css";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
  csrfToken: string;
}

export default function Login({ csrfToken }: any) {
  const router = useRouter();
  const { status, data } = useSession();
  const [loader, setLoader] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoader(true);
    const credentials = {
      username: data.email,
      password: data.password,
      redirect: false,
    };
    await signIn("credentials", credentials).then((res) => {
      setLoader(false);
      if (res?.error) {
        setError(JSON.parse(res?.error).errors);
      } else {
        reset();
      }
    });
  };

  if (status === "authenticated") {
    if (data) {
      AXIOS.defaults.headers.common["authorization"] = `Bearer ${data.user.token}`;
      if(data.user.stripe_customer_id) {
        router.push("/startup/dashboard");
      } else {
        router.push("/onboarding");
      }
    }
  }

  const handleGoogleSignup = () => {
    signIn("google");
  };

  return (
    <MarketingLayout>
      <div className={authStyle.login_wrapper}>
        <div className={authStyle.box}>
          <Text className="font-montserrat f font-bold" fontSize="3xl">
            Login
          </Text>

          <form
            onSubmit={handleSubmit(onSubmit)}
            // method='post'
            // action='/api/auth/callback/credentials'
            className="from-wrapper"
          >
            {error ? (
              <div
                className="mb-8 rounded-lg bg-red-100 px-6 py-5 text-base text-red-700"
                role="alert"
              >
                {error}
              </div>
            ) : null}

            <input
              {...register("csrfToken", { required: true, maxLength: 200 })}
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken}
            />

            <FormControl isInvalid={errors.email?.type === "required"}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register("email", { required: true, maxLength: 200 })}
              />
              {errors.email?.type === "required" ? (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              ) : null}
            </FormControl>

            <div className="pt-5" />
            <FormControl isInvalid={errors.email?.type === "required"}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", { required: true, maxLength: 200 })}
              />
              {errors.password?.type === "required" ? (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              ) : null}
            </FormControl>
            <div className="py-3 text-right">
              <a
                href="/auth/forgot-password"
                className="underline underline-offset-4"
              >
                Forgot Password?
              </a>
            </div>
            <Button
              className="my-3 w-full"
              colorScheme={"green"}
              type="submit"
              isLoading={loader}
            >
              Login
            </Button>
          </form>
          <div className="from-wrapper">
            <p>
              Don&apos;t have an account? 
              <Link href="/auth/signup">
                <b>Sign up</b>
              </Link>
            </p>
            <div className="py-5 text-center"> OR </div>
            <Button className="icon-button w-full" onClick={handleGoogleSignup}>
              Continue with google
            </Button>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}

export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);

  if (!csrfToken) {
    // Handle the case where csrfToken is undefined
    console.error("CSRF token is undefined.");
  }

  return {
    props: {
      csrfToken: csrfToken || null, // Use null if csrfToken is undefined
    },
  };
}
