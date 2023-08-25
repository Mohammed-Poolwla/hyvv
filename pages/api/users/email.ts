import { render } from "@react-email/render";
import { NextApiRequest, NextApiResponse } from "next";

import { sendEmail } from "../../../lib/email";
import InviteEmail from "../../../templates/email/InviteTemplate";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, userName, userTitle, companyName } = _req.body;

    await sendEmail({
      to: email,
      subject: "You received an invite from a startup.",
      html: render(InviteEmail({ userName, userTitle, companyName })),
    });

    return res.status(200).json({
      message: "Invite email sent successfully",
    });
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
