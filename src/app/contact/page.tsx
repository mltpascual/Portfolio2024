import ContactForm from "@/components/ContactForm";
import { Resend } from "resend";

export default function ContactPage() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">Contact me.</h1>
      
      <ContactForm />
    </article>
  );
}
