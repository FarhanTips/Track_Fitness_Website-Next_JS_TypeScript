import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import Link from 'next/link';


const ListedWorkoutCard = ({ fitLog }: { fitLog: FitLogType }) => {
    return (
        <div className="group rounded-2xl border border-base-300 bg-base-200 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

                {/* Thumbnail */}
                <div className="w-full sm:w-32 md:w-36 h-44 sm:h-32 md:h-36 shrink-0 overflow-hidden rounded-xl">
                    <Image
                        src={fitLog.image}
                        alt={fitLog.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0 flex flex-col">

                    {/* Title + Equipment */}
                    <div>
                        <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight truncate">
                            {fitLog.name}
                        </h2>

                        <p className="mt-1 text-sm text-base-content/60">
                            {fitLog.equipment}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-base-content/70">
                        <span className="inline-flex items-center gap-1.5">
                            ⏱️ {fitLog.duration} min
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                            🔥 {fitLog.caloriesBurned} kcal
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                            ⭐ {fitLog.rating}
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 sm:mt-auto flex flex-wrap sm:justify-end items-center gap-2">
                        <button className="btn btn-sm rounded-lg">
                            View Details
                        </button>

                        <button className="btn btn-sm rounded-lg bg-[#ccff00] text-black border-none hover:bg-[#b8e600]">
                            Mark as Done
                        </button>

                        <button
                            className="btn btn-sm btn-circle btn-ghost text-base-content/60 hover:text-error"
                            aria-label="Remove workout"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedWorkoutCard;