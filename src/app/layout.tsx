import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { GlobalLayoutWrapper } from "@/components/layout/GlobalLayoutWrapper";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrcore.in"),
  title: "HR Core - Human Resources & Payroll Solutions",
  description: "Enhancing Human Resources Capabilities, Achieving Business Success. Next-gen HRMS portal, reliable payroll processing, and end-to-end HR services.",
  keywords: ["HRMS", "Payroll Services", "HR Outsourcing", "Human Resources", "Employee Management", "HR Core India"],
  authors: [{ name: "HR Core" }],
  creator: "HR Core",
  publisher: "HR Core",
  icons: {
    icon: [
      { url: "/favicon.jpeg", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  openGraph: {
    title: "HR Core - Smart HRMS, Payroll & HR Services",
    description: "Manage your people, processes, and everyday HR operations with one powerful platform built for the complete employee journey.",
    url: "https://hrcore.in",
    siteName: "HR Core",
    images: [
      {
        url: "/BG-Logo.png",
        width: 800,
        height: 600,
        alt: "HR Core Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Core - Human Resources & Payroll Solutions",
    description: "Manage your people with smart HRMS technology, simplify payroll, and get expert HR services.",
    images: ["/BG-Logo.png"],
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
        <Toaster position="top-center" richColors theme="light" />
      </body>
    </html>
  );
}
