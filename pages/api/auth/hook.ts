import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, secret, user_type } = req.body;
  // 1 Check Request Methof
  if (req.method !== "POST") {
    return res.status(403).json({ message: "Method not allowed" });
  }
  // 2 Check for secret
  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return res.status(403).json({ message: `You must provide the secret 🤫` });
  }
  // 3 validate that an email was included in the body
  if (email) {
    // 4 creates record in db
    await prisma.user.create({
      data: { email, role: user_type },
    });
    return res.status(200).json({
      message: `User with email: ${email} has been created successfully!`,
    });
  }
};

export default handler;
