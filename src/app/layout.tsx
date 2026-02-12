import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bandeja | Garden Kitchen & Bar",
  description: "Coastal Vibes. Latino Soul. A garden kitchen and bar in Westlands, Nairobi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${dmSerifDisplay.variable} antialiased text-[#2C2C2C] relative`}
      >
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-[-1] bg-[#FDFBF7]">
          <div className="absolute inset-0 bg-[url('/wall-texture.png')] opacity-80 mix-blend-multiply bg-repeat bg-[length:500px_500px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
