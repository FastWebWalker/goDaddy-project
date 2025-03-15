import { Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Text({
  children,
  size = "text-[16px]",
  weight = "font-normal",
  className,
}) {
  return (
    <p className={`${manrope.className} ${size} ${weight} ${className}`}>
      {children}
    </p>
  );
}
