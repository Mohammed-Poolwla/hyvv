import { getSession } from "@auth0/nextjs-auth0";

import { useChat } from "ai/react";

import Layout from "../components/layouts/AppLayout/Layout";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-full flex-col gap-4 p-4">
      <div className="flex-auto overflow-auto">
        {messages.map((m) => (
          <div
            className={`mb-4 mt-4 rounded-md ${
              m.role === "user" ? "mr-24 bg-cyan-300" : "ml-24 bg-cyan-100"
            } p-4`}
            key={m.id}
          >
            <span>{m.content}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something ..."
          className="border-1 w-full rounded-md bg-blue-100 pb-2 pl-3 pr-3 pt-2"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Chat;

Chat.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

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
    props: { hideSideNav: true },
  };
};
