import React, { Suspense } from "react";
import Loading from "@layout/Loading/Loading";
import Routes from "@routes/routes";
import Error from "@layout/Error/Error";
import ErrorBoundary from "@lib/ErrorBoundary";

function App() {
  return (
    <main id="App">
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default App;
