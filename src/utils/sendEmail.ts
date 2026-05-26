import axios from "axios";

const EMAILJS_URL =
  process.env.NEXT_PUBLIC_EMAILJS_URL ||
  "https://api.emailjs.com/api/v1.0/email/send";

export type EmailParams = Record<string, string>;

export async function sendEmail(template_params: EmailParams): Promise<void> {
  await axios.post(
    EMAILJS_URL,
    {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      template_params,
    },
    { headers: { "Content-Type": "application/json" } },
  );
}
