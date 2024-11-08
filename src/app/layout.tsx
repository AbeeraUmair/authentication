import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import './globals.css'
import AuthButtons from "./components/authButtons";
import Custom from "./components/CustomPage";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedIn>
            <Custom />
          </SignedIn>
          {children}
          <SignedOut>
            <AuthButtons />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}


