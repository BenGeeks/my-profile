import { Roboto } from "next/font/google";
import "./globals.scss";

import Header from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

export const metadata = {
  title: "Ben-Hur Gican II",
  description: "A javaScript full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${roboto.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
