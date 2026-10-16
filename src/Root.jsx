import { StrictMode } from "react";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// The same tree renders in the browser and at build time, so pre-rendered pages hydrate cleanly.
export default function Root() {
  return (
    <StrictMode>
      <ErrorBoundary
        fallback={{
          title: "Something went wrong · Etwas ist schiefgelaufen",
          body: "Reload the page, or start again from the beginning. · Lade die Seite neu oder fang von vorne an.",
          action: "Start again · Neu starten",
          href: import.meta.env.BASE_URL,
        }}
      >
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
