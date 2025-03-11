// pages/index.js
import React from "react";
import HeroSection from "@/components/mainPage/HeroSection";
import AboutSection from "@/components/mainPage/AboutSection";
import PricingSection from "@/components/mainPage/PricingSection";
import FAQSection from "@/components/mainPage/FAQSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
