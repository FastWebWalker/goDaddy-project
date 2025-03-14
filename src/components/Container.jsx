// Container Component
export default function Container({ children, className }) {
  return <div className={`w-[91.666vw] mx-auto ${className}`}>{children}</div>;
}
