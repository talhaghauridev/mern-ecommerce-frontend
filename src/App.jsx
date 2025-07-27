import useAuth from "@/hooks/useAuth";
import Error from "@/layout/Error/Error";
import ErrorBoundary from "@/lib/ErrorBoundary";
import Routes from "@/routes/routes";
function App() {
   const { user } = useAuth();
   return (
      <main id="App">
         <ErrorBoundary fallback={<Error />}>
            <Routes />
         </ErrorBoundary>
      </main>
   );
}

export default App;
