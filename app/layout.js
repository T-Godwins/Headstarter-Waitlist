import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./analytics";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Join Now",
  description: "Be the first to know about our latest project!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><GoogleAnalytics/></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
