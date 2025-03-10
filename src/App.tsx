import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout.js";
import HeroSection from "@/components/mainPage/HeroSection.js";
import AboutSection from "@/components/mainPage/AboutSection.js";
import PricingSection from "@/components/mainPage/PricingSection.js";
import FAQSection from "./components/mainPage/FAQSection.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <HeroSection />
                <AboutSection />
                <PricingSection />
                <FAQSection />
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
