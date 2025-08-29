import "./styles/global.scss";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary, { ErrorFallback } from "./components/ui/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <AppRoutes />
    </ErrorBoundary>
  );
}
