import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <body>{children}</body>
      <Footer />
    </>
  );
}
