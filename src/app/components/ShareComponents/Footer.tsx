import Image from "next/image";
import Logo from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#24262a] bg-[#0d0f10]">
      <div className="flex flex-col items-center gap-4 px-4 py-8 text-center md:gap-5 md:py-10 lg:flex-row lg:justify-between lg:px-20 lg:text-left">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="FitLog" width={28} height={28} />
          <h1 className="text-lg font-bold uppercase text-white">
            FitLog
          </h1>
        </div>

        <p className="text-xs text-gray-400 md:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
