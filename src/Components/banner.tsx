import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png"

const Hero = () => {
    return (//bg-[#15171dFF]
        <section className="w-11/12 mx-auto mb-20 bg-[#15171dFF] rounded-2xl p-15 border border-[#222630FF]">
            <div className="grid justify-between items-center gap-4    md:grid-cols-2 md:gap-2">

                {/* Content */}
                <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">

                    <p className="mb-4 text-xs font-bold text-[#ccff00] md:text-sm">WORKOUT LIBRARY
                    </p>

                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">TRAIN WITH INTENT. LOG EVERY SET.</h1>

                    <p className="mt-4 text-xs md:text-sm text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan plan, and watch the week&apos;s work add up.
                    </p>

                    <Link href="#library"
                        className="btn btn-success mt-8 rounded-xl bg-[#ccff00] px-6 py-4 font-bold text-black">
                        BROWSE WORKOUTS <span className="text-lg">↓</span>
                    </Link>

                </div>


                {/* Hero Image */}
                <div className="flex justify-center h-70 md:h-86 lg:h-100 items-center">
                    <Image
                        src={banner}
                        alt="Hero Image"
                        className="object-cover w-64 h-64 lg:w-84 lg:h-84 md:w-70 md:h-70"
                    />
                </div>

            </div>
        </section >
    );
};

export default Hero;