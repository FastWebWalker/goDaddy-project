"use client";
import React from "react";

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Блок: Мої Продукти */}
        <h2 className="text-4xl font-bold text-center mb-8">Мої Продукти</h2>
        <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* 5-Day Kickstart */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">5-Day Kickstart</h3>
            <p className="mt-2">
              Короткий опис продукту (наприклад, інтенсивна програма).
            </p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Придбати
            </button>
          </div>
          {/* 21-Day Overhaul */}
          <div className="bg-blue-700 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold">21-Day Overhaul</h3>
            <p className="mt-2">
              Короткий опис продукту (довгострокова програма).
            </p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold">
              Придбати
            </button>
          </div>
          {/* Можна додати інші продукти за потреби */}
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
