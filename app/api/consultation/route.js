import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!fullName || !phone || !email || !message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONSULTATION_EMAIL || process.env.CAREERS_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `New consultation request — ${fullName}`,
      text: `Full Name: ${fullName}\nMobile Number: ${phone}\nEmail: ${email}\n\nWhat help do they need:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Consultation request submission failed:", err);
    return Response.json(
      { error: "Something went wrong while sending your request." },
      { status: 500 }
    );
  }
}
