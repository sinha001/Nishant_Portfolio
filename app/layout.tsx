import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const tektur = Tektur({
  weight: ["400", "500", "600", "700", "800", "900"], // Specify available weights
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant Sinha's Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tektur.variable} ${tektur.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
