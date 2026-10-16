import { TriangleAlert } from "lucide-react";

// A highlighted line of guidance. tone: "warn" (amber), "stop" (red) or plain.
export default function Note({ tone, children }) {
  return (
    <p className={`note ${tone ? `note-${tone}` : ""}`}>
      {tone ? <TriangleAlert aria-hidden="true" /> : null}
      <span>{children}</span>
    </p>
  );
}
