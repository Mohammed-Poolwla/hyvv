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
import Services from "../../services";
import { consoleWarn } from "nexus/dist/utils";
import useCustomToast from "../../utils/toast";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
  csrfToken: string;
}

export default function Signup({ csrfToken }: any) {
  const router = useRouter();
  const showToast = useCustomToast();

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
    await Services.post("/api/auth/signup ", {
      email: data.email,
      password: data.password,
    })
      .then(async (res) => {
        showToast({
          title: "Your account has successfully created",
          status: "success",
        });
        await signIn("credentials", credentials).then((res) => {
          setLoader(false);
          if (res?.error) {
            setError(JSON.parse(res?.error).errors);
          } else {
            reset();
          }
        });
      })
      .catch((err) => {
        console.log("s", err);
        setLoader(false);
        // setError(JSON.parse(err?.error).errors);
        showToast({
          title: "Some errors have occurred",
          status: "error",
        });
      });
  };

  if (status === "authenticated") {
    if (data !== null) {
      AXIOS.defaults.headers.common[
        "authorization"
      ] = `Bearer ${data.user.token}`;
      if (data.user.stripe_customer_id) {
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
            Sign up
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

            <div className="py-3 text-right"></div>
            <Button
              className="my-3 w-full"
              colorScheme={"green"}
              type="submit"
              isLoading={loader}
            >
              Sign up
            </Button>
          </form>

          <div className="from-wrapper">
            <p>
              Already have an account?
              <Link href="/auth/login">
                <b> Log in</b>
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
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
