import { Oswald, Fira_Sans, Mulish, Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";

// Assign fonts with valid weights
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const firaSans = Fira_Sans({ subsets: ["latin"], weight: "400" });
const mulish = Mulish({ subsets: ["latin"], weight: "400" });
const firaSansCondensed = Fira_Sans_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "wadhwaco.in",
  description: "Law Firm Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.className} ${firaSans.className} ${mulish.className} ${firaSansCondensed.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
