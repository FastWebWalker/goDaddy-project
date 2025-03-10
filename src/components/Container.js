import { jsx as _jsx } from "react/jsx-runtime";
// Container Component
export function Container({ children }) {
    return _jsx("div", { className: "container mx-auto px-4 lg:w-4/5", children: children });
}
