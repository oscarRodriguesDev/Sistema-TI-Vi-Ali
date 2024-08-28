import type { Metadata } from "next";
import { ThemeProvider } from "@/app/theme/ThemeContext";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "representa a landing page do sistema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
   <>
   
   {children}
   
   </>
      
    
  
  );
}