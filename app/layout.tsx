"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <main>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
