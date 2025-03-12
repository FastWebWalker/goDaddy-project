// app/api/create-liqpay-payment/route.js
import crypto from "crypto";

export async function POST(request) {
  try {
    const { priceId } = await request.json();

    // Визначаємо параметри платежу залежно від productId
    let amount = "100"; // За замовчуванням
    let description = "";

    if (priceId === "price_5day") {
      amount = "199"; // приклад: 1.99 UAH або інша сума
      description = "Оплата 5-Day Kickstart";
    } else if (priceId === "price_21day") {
      amount = "399";
      description = "Оплата 21-Day Overhaul";
    } else {
      description = "Оплата продукту";
    }

    // Генеруємо order_id (можна використати власну логіку)
    const order_id = `order_${Date.now()}`;

    // Формуємо об'єкт payload для LiqPay
    const payloadObj = {
      version: "3",
      public_key: process.env.LIQPAY_PUBLIC_KEY,
      action: "pay",
      amount: amount,
      currency: "UAH",
      description: description,
      order_id: order_id,
      sandbox: "1",
      server_url: process.env.NEXT_PUBLIC_BASE_URL + "/api/liqpay-callback", // URL для callback (якщо потрібен)
    };

    // Перетворюємо payload в base64
    const payloadStr = JSON.stringify(payloadObj);
    const data = Buffer.from(payloadStr).toString("base64");

    // Генеруємо signature за алгоритмом: base64_encode(sha1(private_key + data + private_key))
    const signature = crypto
      .createHash("sha1")
      .update(
        process.env.LIQPAY_PRIVATE_KEY + data + process.env.LIQPAY_PRIVATE_KEY,
        "utf-8"
      )
      .digest("base64");

    return new Response(JSON.stringify({ data, signature }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("LiqPay API error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
