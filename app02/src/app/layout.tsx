import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./globals.css";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "AdB 1.0",
  description: "A demo app for Address Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body>
        <Container fluid>
        {children}
        </Container>
      </body>
    </html>
  );
}
