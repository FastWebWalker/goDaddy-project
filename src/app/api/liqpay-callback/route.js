import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    // Read parameters from the URL search string
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("order_id");
    const email = searchParams.get("email");
    const status = searchParams.get("status");

    console.log("Callback received:", { orderId, email, status });

    // Check that we have the necessary parameters and that payment was successful/sandbox
    if ((status === "sandbox" || status === "success") && orderId && email) {
      // Load PDF file (update the file path as needed)
      const pdfPath = path.join(
        process.cwd(),
        "public",
        "files",
        "ilovepdf_merged.pdf"
      );
      const pdfBuffer = await fs.readFile(pdfPath);

      // Configure the nodemailer transporter (example using Gmail)
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Set up email options
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Ваш PDF файл після успішної оплати",
        text: "Дякуємо за покупку! Будь ласка, перегляньте вкладений PDF файл.",
        attachments: [
          {
            filename: "ilovepdf_merged.pdf",
            content: pdfBuffer,
          },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(
        JSON.stringify({
          error: "Missing parameters or payment not successful",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("LiqPay callback error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
