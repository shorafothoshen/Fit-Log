import Link from "next/link";
import { Home, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#24262a] bg-[#131518]">
        <Dumbbell size={32} className="text-[#ccff00]" />
      </div>

      <h1 className="font-[family-name:var(--font-oswald)] text-6xl font-bold text-white sm:text-8xl">
        404
      </h1>

      <h2 className="text-lg font-bold uppercase text-white sm:text-xl">
        This lift doesn't exist
      </h2>

      <p className="max-w-xs text-sm text-gray-400">
        The page you're looking for got skipped like leg day. Let's get you back on track.
      </p>

      <Link
        href="/"
        className="mt-2 flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-2.5 text-xs font-bold text-black transition hover:brightness-110 sm:text-sm"
      >
        <Home size={16} />
        Go to workouts
      </Link>
    </div>
  );
}