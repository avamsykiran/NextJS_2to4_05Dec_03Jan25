import { Spinner } from 'react-bootstrap';

export default function DashboardLoading() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5 min-vh-50">
      <Spinner animation="border" variant="primary" className="mb-2" />
      <p className="text-muted small fw-medium">Syncing live data ...</p>
    </div>
  );
}