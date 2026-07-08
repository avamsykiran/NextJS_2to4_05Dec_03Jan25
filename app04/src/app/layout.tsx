import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./globals.css";
import { Container } from "react-bootstrap";
import Header from "@/components/Header"; // '@' refers to /src/
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "AdB 2.0",
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
        <ThemeProvider>
          <Header title="Address Book 3.0" />
          <Container fluid>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
