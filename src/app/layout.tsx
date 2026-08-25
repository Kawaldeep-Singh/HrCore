import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ModalProvider } from "@/context/ModalContext";
import { ContactModal } from "@/components/ui/ContactModal";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HR Core - Human Resources & Payroll Solutions",
  description: "Enhancing Human Resources Capabilities, Achieving Business Success.",
};

import { Navbar2 } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#040d08] text-[#f9f9f9] selection:bg-[#4caf50]/30" suppressHydrationWarning>
        <ModalProvider>
          <SmoothScroll>
            <Navbar2 />
            {children}
            <Footer />
          </SmoothScroll>
          <ContactModal />
          <FloatingButtons />
        </ModalProvider>
      </body>
    </html>
  );
}
