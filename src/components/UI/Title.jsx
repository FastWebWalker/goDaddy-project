import { Bebas_Neue } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Title({ children, size = "text-[60px]", className }) {
  return (
    <h1 className={`${bebasNeue.className} ${className} ${size}`}>
      {children}
    </h1>
  );
}
