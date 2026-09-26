function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#24262a] border-t-[#ccff00]" />
      <p className="text-sm text-gray-400">Loading workouts…</p>
    </div>
  );
}

export default Loading;