// One persistent live region, so screen readers announce each message; the visual toast shows on top.
export default function Toast({ message }) {
  return (
    <div role="status" aria-live="polite">
      {message ? (
        <div className="fixed inset-x-0 bottom-[max(16px,env(safe-area-inset-bottom))] z-50 mx-auto w-[min(32rem,calc(100%-32px))] rounded-[var(--radius-inner)] bg-ink px-4 py-3 text-sm leading-snug text-bg shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)]">
          {message}
        </div>
      ) : null}
    </div>
  );
}
