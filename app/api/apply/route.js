import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const role = formData.get("role")?.toString().trim();
    const resume = formData.get("resume");
    const coverLetter = formData.get("coverLetter");

    if (!fullName || !phone || !email || !role || !resume || resume.size === 0) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const attachments = [];
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    attachments.push({ filename: resume.name, content: resumeBuffer.toString("base64") });

    if (coverLetter && coverLetter.size > 0) {
      const coverBuffer = Buffer.from(await coverLetter.arrayBuffer());
      attachments.push({ filename: coverLetter.name, content: coverBuffer.toString("base64") });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: process.env.CAREERS_EMAIL,
      replyTo: email,
      subject: `New application: ${role} — ${fullName}`,
      text: `Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nRole Applying For: ${role}`,
      attachments,
    });

    if (error) {
      console.error("Career application submission failed:", error);
      return Response.json(
        { error: "Something went wrong while sending your application." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Career application submission failed:", err);
    return Response.json(
      { error: "Something went wrong while sending your application." },
      { status: 500 }
    );
  }
}
