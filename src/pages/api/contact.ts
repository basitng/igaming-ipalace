import ContactEmailTemplate from "@/components/templates/contact";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { name, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: ["basitng2004@gmail.com"],
      subject: "Contact Form Submission",
      react: ContactEmailTemplate({ name, message }),
    });

    if (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
      return;
    }

    res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
