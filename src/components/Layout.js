import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "@/components/UI/Header.js";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/UI/Footer.js";
// Layout Component
export default function Layout() {
    return (_jsxs("div", { className: "bg-black text-white w-[100vw]", children: [_jsx(Header, {}), _jsx("main", { className: "min-h-screen", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
