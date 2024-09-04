import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme";
import Dashboard from "@/containers/dashboard";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Paczesny Portfolio",
  description: "Dashboard for dev.paczesny.pl. Allows to manage the website content and see analytics of the trafic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Dashboard>
            {children}
          </Dashboard>
        </ThemeProvider>
      </body>
    </html>
  );
}
