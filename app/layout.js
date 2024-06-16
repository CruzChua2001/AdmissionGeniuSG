import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import {NextUIProvider} from "@nextui-org/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdmissionGeniuSG",
  description: "Created by Cruz Chua",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <NextUIProvider>
        <Navbar />
        {children}

      </NextUIProvider>
      </body>
    </html>
  );
}
