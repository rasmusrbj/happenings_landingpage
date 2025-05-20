import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from 'sonner'
import "../fontawesome.js";

export const metadata = {
  title: "Happenings",
  description: "A social tool connecting people at schools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-zinc-50">
      <body className={`${GeistSans.className} h-full`}>
        {children}
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
