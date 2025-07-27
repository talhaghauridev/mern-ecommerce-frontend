import React, { Suspense } from "react";
import Loading from "@/layout/Loading/Loading";
import Routes from "@/routes/routes";
import Error from "@/layout/Error/Error";
import ErrorBoundary from "@/lib/ErrorBoundary";
import useAuth from "@/hooks/useAuth";
function App() {
  const { user } = useAuth();
  return (
    // <main id="App">
    <ErrorBoundary fallback={<Error />}>
      <Routes />
    </ErrorBoundary>
    // </main>
  );
}

export default App;
