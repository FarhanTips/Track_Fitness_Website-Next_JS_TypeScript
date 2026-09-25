'use client';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { FitLogsContext } from '@/context/fitLogscontext';

const NavBar = () => {

    const pathname = usePathname();

    const links = <>
        <li><Link className={`font-semibold ${pathname === "/" ? "text-[#ccff00]" : ""}`} href="/">Workouts</Link></li>
        <li><Link className={`font-semibold ${pathname === "/my-plan" ? "text-[#ccff00]" : ""}`} href="/my-plan">My Plan</Link></li>
    </>

    const { plansArr, laterArr } = useContext(FitLogsContext);
    return (
        <div className='sticky top-0 z-50 border-b border-gray-600 bg-base-200 mb-15'>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="FITLOG logo"
                            width={20}
                            height={20}
                            className="h-3.5 w-3.5 object-contain -scale-x-100 sm:h-5 sm:w-5"
                        />
                        <Link href={"/"}>
                            <span className="text-sm sm:text-xl font-bold">
                                FITLOG
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end flex items-center space-x-2 sm:space-x-5 lg:space-x-7 font-semibold">

                    <Link href={"/my-plan"}>
                        <div className="text-xs sm:text-base flex items-center gap-2">
                            <span>Plan</span>
                            <span className="inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#ccff00] text-black">
                                {plansArr.length}
                            </span>
                        </div>
                    </Link>

                    <Link href={"/my-plan"}>
                        <div className="text-xs sm:text-base flex items-center gap-2 text-[#d1d5db]">
                            <span>Saved</span>
                            <span className="inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#9ca3af]">
                                {laterArr.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;