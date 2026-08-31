import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { GlobalLayoutWrapper } from "@/components/layout/GlobalLayoutWrapper";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HR Core - Human Resources & Payroll Solutions",
  description: "Enhancing Human Resources Capabilities, Achieving Business Success.",
  icons: {
    icon: "/favicn.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} antialiased`}
    >
      <body className="flex flex-col bg-[#040d08] text-[#f9f9f9] selection:bg-[#4caf50]/30" suppressHydrationWarning>
        <ModalProvider>
          <GlobalLayoutWrapper>
            {children}
          </GlobalLayoutWrapper>
        </ModalProvider>
      </body>
    </html>
  );
}
