import Image from "next/image";
import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div className="border-t border-gray-600 mt-20">
            <div className="w-11/12 mx-auto flex justify-between items-center py-15 ">

                <div className="flex items-center gap-2 ">
                    <Image
                        src={logo}
                        alt="FITLOG logo"
                        width={20}
                        height={20}
                        className="object-contain -rotate-45"
                    />

                    <p className="text-sm sm:text-lg md:text-xl font-bold">
                        FITLOG
                    </p>

                </div>

                <p className="text-gray-400 text-xs sm:text-sm md:text-base">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;