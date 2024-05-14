import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] });
const tanFont = localFont({ src: './tan-pearl.otf' })

export const metadata = {
  title: "Good in Your Eyes Film",
  description: "Good in Your Eyes Film Official Website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
