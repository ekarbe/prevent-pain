import { href, navigate } from "../lib/useRoute.js";

// A real link, so every page can be crawled, bookmarked or opened in a new tab. A plain click stays
// in the app; onNavigate runs just before it moves.
export default function Link({ to, replace = false, onNavigate, ...props }) {
  const follow = (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return;
    e.preventDefault();
    onNavigate?.();
    navigate(to, { replace });
  };
  return <a {...props} href={href(to)} onClick={follow} />;
}
