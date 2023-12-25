import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Room GPT",
  description:
    "Room GPT is a cutting-edge application that uses AI to recreate images of rooms based on client-user input. By leveraging replicate ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
