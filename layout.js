import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "../Header";
import Footer from "../Footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-tape",
  display: "swap",
});

export const metadata = {
  title: "Coverly — Know exactly how much material to buy",
  description:
    "Free calculators for gravel, mulch, drywall, fence, paint, and more. Enter your measurements, get an exact quantity — no guessing, no leftover bags.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
