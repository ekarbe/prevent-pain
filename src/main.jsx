import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      fallback={{
        title: "Something went wrong · Etwas ist schiefgelaufen",
        body: "Reload the page, or start again from the beginning. · Lade die Seite neu oder fang von vorne an.",
        action: "Start again · Neu starten",
        href: "#/",
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
