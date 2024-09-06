import "@/styles/globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "font-sans antialiased min-h-screen",
          fontSans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
