import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TourSafe",
  description:
    "SureShare is a blockchain-powered public distribution system designed to ensure transparent, secure, and efficient delivery of government resources to citizens. Track the distribution of essentials like food, healthcare supplies, and subsidies with real-time updates, reducing fraud and enhancing trust in public welfare programs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Protect pages with SignedIn/SignedOut components */}
          <SignedIn>
            <Navbar />
            {children}
            <Footer />
          </SignedIn>

          {/* Redirect to the login page for signed-out users */}
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
