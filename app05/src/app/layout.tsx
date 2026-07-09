import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./globals.css";
import ClientStoreShell from "./ClientStoreShell";

export const metadata: Metadata = {
  title: "AdB 3.1",
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
        <ClientStoreShell>
          {children}
        </ClientStoreShell>
      </body>
    </html>
  );
}
