import "./styles/global.scss";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary, { ErrorFallback } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <AppRoutes />
    </ErrorBoundary>
  );
}
