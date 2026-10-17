import { createRoot, hydrateRoot } from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";

// A pre-rendered page takes over its HTML. Anything else (the 404 page, a plan with test results in
// the link, an old #/ link) renders from scratch.
const container = document.getElementById("root");
const { pathname, search } = window.location;
if (container.dataset.route === pathname + search) {
  hydrateRoot(container, <Root />);
} else {
  container.replaceChildren();
  createRoot(container).render(<Root />);
}
