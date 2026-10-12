import nodemailer from "nodemailer";

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
    attachments.push({ filename: resume.name, content: resumeBuffer });

    if (coverLetter && coverLetter.size > 0) {
      const coverBuffer = Buffer.from(await coverLetter.arrayBuffer());
      attachments.push({ filename: coverLetter.name, content: coverBuffer });
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
      to: process.env.CAREERS_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `New application: ${role} — ${fullName}`,
      text: `Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nRole Applying For: ${role}`,
      attachments,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Career application submission failed:", err);
    return Response.json(
      { error: "Something went wrong while sending your application." },
      { status: 500 }
    );
  }
}
