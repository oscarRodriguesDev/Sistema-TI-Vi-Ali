import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "./components";
import { ThemeProvider } from "@/app/theme/ThemeContext";



export const metadata: Metadata = {
  title: "Ti Vi Ali",
  description:
    "Seja bem vindo a uma nova forma de conectar-se",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (


    <Layout>
      <ThemeProvider>
        {children}

      </ThemeProvider>

    </Layout>


  );
}
