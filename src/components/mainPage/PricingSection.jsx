"use client";
import React, { useState } from "react";

export default function PricingSection() {
  const [email, setEmail] = useState("");

  const handlePurchase = async (priceId) => {
    if (!email) {
      alert("Будь ласка, введіть свій email");
      return;
    }
    try {
      const res = await fetch("/api/create-liqpay-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, email }),
      });
      const { data, signature, error } = await res.json();

      if (error) {
        throw new Error(error);
      }

      // Create form dynamically and submit it to LiqPay
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://www.liqpay.ua/api/3/checkout";
      form.style.display = "none";

      const inputData = document.createElement("input");
      inputData.type = "hidden";
      inputData.name = "data";
      inputData.value = data;
      form.appendChild(inputData);

      const inputSignature = document.createElement("input");
      inputSignature.type = "hidden";
      inputSignature.name = "signature";
      inputSignature.value = signature;
      form.appendChild(inputSignature);

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("LiqPay checkout error:", error);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Email Input */}
        <div className="mb-8 text-center">
          <label htmlFor="email" className="block mb-2 text-lg">
            Введіть свій email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="px-4 py-2 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Блок: Мої Продукти */}
        <h2 className="text-4xl font-bold text-center mb-8">Мої Продукти</h2>
        <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* 5-Day Kickstart */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">5-Day Kickstart</h3>
            <p className="mt-2">
              Короткий опис продукту (наприклад, інтенсивна програма).
            </p>
            <button
              onClick={() => handlePurchase("price_5day")}
              className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Придбати
            </button>
          </div>
          {/* 21-Day Overhaul */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">21-Day Overhaul</h3>
            <p className="mt-2">
              Короткий опис продукту (довгострокова програма).
            </p>
            <button
              onClick={() => handlePurchase("price_21day")}
              className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Придбати
            </button>
          </div>
        </div>

        {/* Блок: Чему я учу */}
        <h2 className="text-4xl font-bold text-center mt-16 mb-8">
          Чему я учу
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Style */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Style</h3>
            <p className="mt-2">Як формувати індивідуальний стиль</p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Дізнатися більше
            </button>
          </div>
          {/* Grooming */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Grooming</h3>
            <p className="mt-2">Догляд за собою і гігієна</p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Дізнатися більше
            </button>
          </div>
          {/* Mindset */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Mindset</h3>
            <p className="mt-2">Ментальні установки для успіху</p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Дізнатися більше
            </button>
          </div>
          {/* Relationships */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Relationships</h3>
            <p className="mt-2">Побудова здорових стосунків</p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Дізнатися більше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
