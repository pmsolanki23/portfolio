import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

// 🔥 CREATE MESSAGE
// export const sendMessage = async (req, res) => {
//   try {
//     const { name, email, message, projectType } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const safeProjectType = projectType || "Not specified";

//     // ✅ SAVE IN DB
//     await Contact.create({
//   name,
//   email,
//   message,
//   projectType: safeProjectType,

//  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // ⏳ 7 days
// });

//     // ✅ MAIL SETUP
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ✅ SEND EMAIL
//     const info = await transporter.sendMail({
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: `New Message from ${name}`,
//       html: `
//         <div style="font-family: Arial; padding:20px;">
//           <h2>📩 New Contact Message</h2>
//           <p><b>Name:</b> ${name}</p>
//           <p><b>Email:</b> ${email}</p>
//           <p><b>Project:</b> ${safeProjectType}</p>
//           <p><b>Message:</b></p>
//           <p>${message}</p>
//         </div>
//       `,
//     });

//     console.log("MAIL SENT:", info.response);

//     res.json({ success: true });

//   } catch (error) {
//     console.error("CONTACT ERROR:", error);
//     res.status(500).json({ message: "Email failed", error: error.message });
//   }
// };

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message, projectType } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const safeProjectType = projectType || "Not specified";

    // ✅ SAVE IN DB
    const contact = await Contact.create({
      name,
      email,
      message,
      projectType: safeProjectType,
      status: "lead", // ✅ FIXED
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    // ✅ MAIL SETUP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 ADMIN EMAIL
    try {
      await transporter.sendMail({
        from: `"Portfolio | Pruthvi.dev" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Project Request - ${safeProjectType}`,
        html: `
          <div style="padding:30px;font-family:Arial;">
            <div style="max-width:600px;margin:auto;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
              
              <h2 style="color:#10b981;">📩 New Client Inquiry</h2>

              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Project:</b> ${safeProjectType}</p>

              <div style="margin:20px 0;padding:14px;background:#f3f4f6;border-radius:10px;">
                <p>“${message}”</p>
              </div>

              <a href="mailto:${email}" style="
                display:inline-block;
                padding:10px 16px;
                border-radius:999px;
                background:linear-gradient(90deg,#10b981,#14b8a6);
                color:#000;
                text-decoration:none;
                font-weight:600;">
                Reply to Client →
              </a>

            </div>
          </div>
        `,
      });
    } catch (err) {
      console.log("Admin mail failed ❌");
    }

    // 🔥 CLIENT EMAIL
    try {
      await transporter.sendMail({
        from: `"Pruthvi.dev" <${process.env.EMAIL_USER}>`,
        to: email,
        replyTo: process.env.EMAIL_USER,
        subject: `Got your message, ${name}`,
        html: `
          <div style="padding:30px;font-family:Arial;">
            <div style="max-width:600px;margin:auto;border-radius:12px;padding:28px;border:1px solid #e5e7eb;">
              
              <h2 style="color:#10b981;">✅ Inquiry Received</h2>

              <p>Hello <b>${name}</b>,</p>

              <p>
                Thanks for reaching out regarding your <b>${safeProjectType}</b>.
                I’ve received your message and will review it shortly.
              </p>

              <div style="margin:20px 0;padding:14px;background:#f3f4f6;border-radius:10px;">
                <p>“${message}”</p>
              </div>

              <p>I’ll get back to you within 24–48 hours.</p>

              <hr style="margin:24px 0;" />

              <p style="font-size:13px;color:#6b7280;">
                This is an automated confirmation — no need to reply.
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
      console.log("Client mail failed ❌");
    }

    res.json({ success: true, data: contact });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ message: "Email failed" });
  }
};

// 🔥 GET ALL
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};

// 🔥 DELETE
export const deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ message: "Delete failed" });
  }
};

// 🔥 UPDATE STATUS (CLIENT SYSTEM)
// export const updateStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const updated = await Contact.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { returnDocument: "after" },
//     );

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: "Update failed" });
//   }
// };
export const updateStatus = async (req, res) => {
  try {
    const { status, approved } = req.body;

    const updateData = {};

    if (status) updateData.status = status;
    if (approved !== undefined) updateData.approved = approved;

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } // 🔥 IMPORTANT
    );

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

    console.log(`🗑️ Deleted ${result.deletedCount} expired requests`);
  } catch (err) {
    console.error("Auto delete error:", err);
  }
};
