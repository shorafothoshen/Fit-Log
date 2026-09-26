"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { PlansContext } from "@/app/context/PlansContext";

function NavBar() {

  const {planCount,SavedCount} = useContext(PlansContext);

  const PlanSavedLinks = (
    <>
      <Link
        href="/my-plan"
        className="flex items-center gap-1.5 rounded-full px-2.5 py-2.5 text-md lg:text-xl text-gray-300 transition hover:bg-[#191c1e] hover:text-white"
      >
        <h1>Plan</h1>
        <h1 className="flex items-center justify-center rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-bold text-black">
          {planCount}
        </h1>
      </Link>

      <Link
        href="/my-plan/saved/"
        className="flex items-center gap-1.5 rounded-full px-2.5 py-2.5 text-md lg:text-xl text-gray-300 transition hover:bg-[#191c1e] hover:text-white"
      >
        <h1>Saved</h1>
        <h1 className="flex items-center justify-center rounded-full border border-gray-600 px-2 py-1 text-[10px] text-gray-300">
          {SavedCount}
        </h1>
      </Link>
    </>
  );
  const MenuItem = (
    <>
      <li>
        <Link
          href="/"
          className="rounded-full bg-[#1d2a0d] px-4 py-1 text-[#ccff00]"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link href='/my-plan' className="px-4 py-1 text-gray-400 hover:text-white">
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className=" sticky top-0 z-50 border-b border-[#24262a] bg-[#0d0f10] shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-20 py-3 lg:px-6">
        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Fitlog Logo" width={28} height={28} />
            <h1 className="hidden md:block text-lg font-bold uppercase tracking-wide text-white">
              Fitlog
            </h1>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <ul className="hidden items-center gap-2 lg:flex">{MenuItem}</ul>
          <div className="flex items-center gap-2 lg:hidden">
            {PlanSavedLinks}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden items-center gap-3 lg:flex">
            {PlanSavedLinks}
          </div>

          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-48 rounded-xl border border-[#24262a] bg-[#151719] p-2 shadow-xl"
            >
              {MenuItem}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
