"use client";

import { useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the structural error stack to an enterprise logging service
    console.error("Route Exception Caught:", error);
  }, [error]);

  return (
    <div className="p-4 my-3 mx-auto max-w-xl">
      <Alert variant="danger" className="shadow-sm">
        <Alert.Heading className="fs-5 fw-bold">Data Synchronization Error</Alert.Heading>
        <p className="small text-muted mb-3">
          {error.message || "An unexpected error occurred while processing this segment."}
        </p>
        <div className="d-flex gap-2">
          <Button variant="danger" size="sm" onClick={() => reset()}>
            Retry Segment Load
          </Button>
        </div>
      </Alert>
    </div>
  );
}