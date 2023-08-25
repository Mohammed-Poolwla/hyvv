import { handleLogin } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const signupHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return handleLogin(req, res, {
    authorizationParams: {
      screen_hint: "signup",
      user_type: req.query.type,
    },
    returnTo: "/onboarding",
  });
};

export default signupHandler;
