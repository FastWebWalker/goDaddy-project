import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout.js";
import HeroSection from "@/components/mainPage/HeroSection.js";
import AboutSection from "@/components/mainPage/AboutSection.js";
import PricingSection from "@/components/mainPage/PricingSection.js";
import FAQSection from "./components/mainPage/FAQSection.js";
function App() {
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Layout, {}), children: _jsx(Route, { index: true, element: _jsxs(_Fragment, { children: [_jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(PricingSection, {}), _jsx(FAQSection, {})] }) }) }) }) }));
}
export default App;
