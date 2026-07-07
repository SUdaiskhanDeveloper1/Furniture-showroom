import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Sofa Loft | Modern Furniture Showroom",
    template: "%s | The Sofa Loft",
  },
  description:
    "Shop corner sofas, leather sofas, fabric sofas, sofa beds and more. Visit one of our 5 UK showrooms or shop online with free delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Providers>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
