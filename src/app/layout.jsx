import { Roboto } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import RecaptchaWrapper from "./RecaptchaWrapper";


const roboto = Roboto({ weight: '400', subsets: ["latin"] });
const tanFont = localFont({ src: './tan-pearl.otf' })

export const metadata = {
  title: "Good in Your Eyes Film",
  description: "Good in Your Eyes Film Official Website",
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"roboto.className"}>
        <RecaptchaWrapper>
          {children}
        </RecaptchaWrapper>
      </body>
    </html>
  );
}
