import { Resend } from "resend";
import Contact from "../models/Contact.js";

const resend = process.env.RESEND_API_KEY?.trim()
  ? new Resend(process.env.RESEND_API_KEY.trim())
  : null;

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const sendEmail = async ({ to, replyTo, subject, html }) => {
  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured");
  }

  const from =
    process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  const result = await resend.emails.send({
    from,
    to,
    replyTo,
    subject,
    html,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
};

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message, projectType } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const safeProjectType = projectType || "Not specified";
    const contactToEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;

    const contact = await Contact.create({
      name,
      email,
      message,
      projectType: safeProjectType,
      status: "lead",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const safeProjectLabel = escapeHtml(safeProjectType);

    try {
      await sendEmail({
        to: contactToEmail,
        replyTo: email,
        subject: `New Project Request - ${safeProjectType}`,
        html: `
          <div style="padding:30px;font-family:Arial,sans-serif;">
            <div style="max-width:600px;margin:auto;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
              <h2 style="color:#10b981;">New Client Inquiry</h2>
              <p><b>Name:</b> ${safeName}</p>
              <p><b>Email:</b> ${safeEmail}</p>
              <p><b>Project:</b> ${safeProjectLabel}</p>
              <div style="margin:20px 0;padding:14px;background:#f3f4f6;border-radius:10px;">
                <p>${safeMessage}</p>
              </div>
              <a href="mailto:${safeEmail}" style="display:inline-block;padding:10px 16px;border-radius:999px;background:#10b981;color:#000;text-decoration:none;font-weight:600;">
                Reply to Client
              </a>
            </div>
          </div>
        `,
      });
    } catch (err) {
      console.error("Admin mail failed:", err.message);
    }

    try {
      await sendEmail({
        to: email,
        replyTo: contactToEmail,
        subject: `Got your message, ${name}`,
        html: `
          <div style="padding:30px;font-family:Arial,sans-serif;">
            <div style="max-width:600px;margin:auto;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
              <h2 style="color:#10b981;">Inquiry Received</h2>
              <p>Hello <b>${safeName}</b>,</p>
              <p>
                Thanks for reaching out regarding your <b>${safeProjectLabel}</b>.
                I have received your message and will review it shortly.
              </p>
              <div style="margin:20px 0;padding:14px;background:#f3f4f6;border-radius:10px;">
                <p>${safeMessage}</p>
              </div>
              <p>I will get back to you within 24-48 hours.</p>
              <hr style="margin:24px 0;" />
              <p style="font-size:13px;color:#6b7280;">
                This is an automated confirmation, no need to reply.
              </p>
              <p>
                Regards,<br/>
                <b style="color:#10b981;">Pruthvi Solanki</b>
              </p>
            </div>
          </div>
        `,
      });
    } catch (err) {
      console.error("Client mail failed:", err.message);
    }

    res.json({ success: true, data: contact });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ message: "Message failed" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ message: "Delete failed" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status, approved } = req.body;

    const updateData = {};

    if (status) updateData.status = status;
    if (approved !== undefined) updateData.approved = approved;

    const updated = await Contact.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

export const autoDeleteContacts = async () => {
  try {
    const now = new Date();

    const result = await Contact.deleteMany({
      status: { $in: ["pending", "ongoing"] },
      expiresAt: { $lte: now },
    });

    console.log(`Deleted ${result.deletedCount} expired requests`);
  } catch (err) {
    console.error("Auto delete error:", err);
  }
};
