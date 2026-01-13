import type { Metadata } from "next";
import { Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pecado de Canela",
  description: "Los mejores Roles de Canela",
  icons: {
    icon: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} ${breeSerif.variable}  bg-[#fffaeb] min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
