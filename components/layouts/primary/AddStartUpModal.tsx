import { gql, useMutation } from "@apollo/client";
import { getSession } from "@auth0/nextjs-auth0";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import stripeCheckout from "../../../utils/stripe/checkout";

const CreateStartUpMutation = gql`
  mutation CreateStartUp($companyName: String!, $companyType: String) {
    createStartUp(companyName: $companyName, companyType: $companyType) {
      id
      companyName
      companyType
      members {
        id
        isActive
        isFounder
        jobTitle
        startDate
        user {
          email
          firstName
          lastName
          role
        }
      }
    }
  }
`;

const AddStartupModal = ({ isOpen, onClose, reQuery }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createStartUp, { loading, error }] = useMutation(
    CreateStartUpMutation,
    {
      onCompleted: () => reset(),
    }
  );

  const onSubmit = async (data) => {
    const { companyName, companyType } = data;
    const variables = { companyName, companyType };
    stripeCheckout({
      lineItems: [
        {
          price: "price_1MhiDmCAsQbVj6QwvfnhPOJl",
          quantity: 1,
        },
      ],
    });
    try {
      toast.promise(createStartUp({ variables }), {
        loading: "Creating new StartUp..",
        success: () => {
          reQuery();
          return "StartUp successfully created!🎉";
        },
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Create a New Startup</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input
                  name="companyName"
                  {...register("companyName", { required: true })}
                  placeholder="Type company name here..."
                />
                <ErrorMessage
                  errors={errors}
                  name={"companyName"}
                  render={({ message }) => <p>{message}</p>}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Company Type</FormLabel>
                <Select
                  name="companyType"
                  {...register("companyType", { required: true })}
                  defaultValue={"startup"}
                >
                  <option value="startup">Startup</option>
                  <option value="small-business">Small Business</option>
                  <option value="incubator">Incubator</option>
                </Select>
                <ErrorMessage
                  errors={errors}
                  name={"companyType"}
                  render={({ message }) => <p>{message}</p>}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                disabled={loading}
                isLoading={loading}
              >
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddStartupModal;

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
      props: {},
    };
  }

  return {
    props: { session: session.user },
  };
};
