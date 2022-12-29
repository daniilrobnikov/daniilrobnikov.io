import nodemailer from "nodemailer";
import { env } from "../env/client.mjs";

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  company: string;
  message: string;
}

export const sendContactForm = async (data: ContactForm) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

/**
 * @TODO Add OAuth2
 */
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.NEXT_PUBLIC_EMAIL_USER,
    pass: env.NEXT_PUBLIC_EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
