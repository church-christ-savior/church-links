import type { Metadata } from "next";
import { onest } from "./ui/fonts";
import { BASE } from "./data";
import "./globals.css";

export const metadata: Metadata = {
  title: "Церква Христа-Спасителя",
  description: "Посилання на соціальні мережі та канали церкви Христа-Спасителя у Дрогобичі",
  icons: {
    icon: `${BASE}/logo.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${onest.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
