import { Component } from "react";

// Keeps one broken screen from blanking the whole app. Remounted per page (key), so moving on recovers.
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    const { title, body, action, href } = this.props.fallback;
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4 pt-3">
        <h1 tabIndex={-1} className="page-title">
          {title}
        </h1>
        <p className="lead">{body}</p>
        <a className="btn" href={href}>
          {action}
        </a>
      </div>
    );
  }
}
