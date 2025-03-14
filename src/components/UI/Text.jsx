import { Lora } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Text({
  children,
  isLora = false,
  size = "text-[14px]",
  weight = "font-normal",
}) {
  return (
    <p className={`${isLora && lora.className} ${size} ${weight}`}>
      {children}
    </p>
  );
}
