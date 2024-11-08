"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    throw new Error("Validation failed");
  }

  try {
    const { name, email, message } = result.data;
    await resend.emails.send({
      from: `mltpascual.com <onboarding@resend.dev>`,
      to: "miguelpascual.life@gmail.com",
      replyTo: [email],
      subject: `New message from ${name}!`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
