// pages/admin.tsx
import { gql, useMutation } from "@apollo/client";
import { getSession } from "@auth0/nextjs-auth0";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const CreateStartUpMutation = gql`
  mutation ($companyName: String!, $industry: String!, $imageUrl: String) {
    createStartUp(
      companyName: $companyName
      industry: $industry
      imageUrl: $imageUrl
      founder_id: $founder_id
    ) {
      companyName
      industry
      imageUrl
      founder_id
    }
  }
`;

const Admin = (_props) => {
  const {
    register,
    handleSubmit,
    //formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [createStartUp, { loading, error }] = useMutation(
    CreateStartUpMutation,
    {
      onCompleted: () => reset(),
    }
  );

  // Upload photo function
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/image-upload?file=${filename}`);
    const data = await res.json();
    const formData = new FormData();

    Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
      //@ts-ignore
      formData.append(key, value);
    });

    toast.promise(
      fetch(data.url, {
        method: "POST",
        body: formData,
      }),
      {
        loading: "Uploading...",
        success: "Image successfully uploaded!🎉",
        error: `Upload failed 😥 Please try again ${error}`,
      }
    );
  };

  const onSubmit = async (data) => {
    const { companyName, industry, image } = data;
    // founder_id = props.session.userID
    const imageUrl = `https://hyvv-dev-test.s3.amazonaws.com/${image[0].name}`;
    const variables = { companyName, industry, imageUrl };

    try {
      toast.promise(createStartUp({ variables }), {
        loading: "Creating new StartUp..",
        success: "StartUp successfully created!🎉",
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <h1 className="my-5 text-3xl font-medium">Create a new StartUp</h1>
      <form
        className="grid grid-cols-1 gap-y-6 rounded-lg p-8 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            placeholder="Company Name"
            name="companyName"
            type="text"
            {...register("companyName", { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Industry</span>
          <input
            placeholder="Industry"
            {...register("industry", { required: true })}
            name="industry"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">
            Upload a .png or .jpg image (max 1MB).
          </span>
          <input
            {...register("image", { required: true })}
            onChange={uploadPhoto}
            type="file"
            accept="image/png, image/jpeg"
            name="image"
          />
        </label>

        <button
          disabled={loading}
          type="submit"
          className="my-4 rounded-md bg-blue-500 py-2 px-4 font-medium capitalize text-white hover:bg-blue-600"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="mr-1 h-6 w-6 animate-spin"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Creating...
            </span>
          ) : (
            <span>Create StartUp</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Admin;

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
