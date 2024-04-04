import type { Metadata } from "next";
import "./assets/globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Google Clone With Next js",
  description: "An open soruce Google clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" />
      <body>
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
