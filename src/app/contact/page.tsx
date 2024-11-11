import ContactForm from "@/components/ContactForm";
import { Analytics } from '@vercel/analytics/react';

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">Contact me.</h1>
      
      <ContactForm />
      <Analytics />
    </article>
  );
}
