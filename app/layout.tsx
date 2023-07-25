"use client"

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { raleway } from "./fonts";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(raleway.variable)}>
        <Nav />
        <div className="fixed h-screen w-full"
               style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1619265180726-6c11823ebf6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "brightness(0.10)",
                    }} />
        <Suspense fallback="...">
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32"
        >
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );  
}
