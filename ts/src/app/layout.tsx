import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="navbar">
          <Link href={"/"}>홈</Link>&nbsp;
          <Link href={"/components"}>컴포넌트</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
