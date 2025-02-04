"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: {
  name: string
  email: string
  message: string
  phone?: string
}) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "wlaaldaadaa33@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>phone:</strong> ${data?.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })

    return { success: true, response }
  } catch (error) {
    return { success: false, error: "Failed to send email" }
  }
}
