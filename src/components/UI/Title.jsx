import localFont from "next/font/local";

const marghote = localFont({
  src: [
    {
      path: "../../../public/fonts/marghote/Marghote.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/marghote/Marghote.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-marghote",
  display: "swap",
});

const wsParadose = localFont({
  src: "../../../public/fonts/wsParadose/wsparadoseregular-1jpae.ttf",
  variable: "--font-ws-paradose",
  display: "swap",
});

export default function Title({
  children,
  size = "text-[60px]",
  className,
  isParadose,
}) {
  return (
    <h1
      className={`${
        isParadose ? wsParadose.className : marghote.className
      } ${className} ${size}`}>
      {children}
    </h1>
  );
}
