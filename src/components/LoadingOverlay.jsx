import { useLoading } from "../context/LoadingContext";

const LoadingOverlay = () => {
  const { isLoading } = useLoading();
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div
        className="h-10 w-10 rounded-full border-4 border-brand-600 border-t-transparent animate-spin"
        aria-hidden
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default LoadingOverlay;
