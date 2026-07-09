"use client"

import StoreProvider from '@/components/StoreProvider';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';

// Force this specific leaf component to execute strictly on the client side
const Header = dynamic(() => import('@/components/Header'), { ssr: false });

export default function ClientStoreShell({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Header title="Address Book 3.1" />
      <Container fluid>
        {children}
      </Container>
    </StoreProvider>
  );
}