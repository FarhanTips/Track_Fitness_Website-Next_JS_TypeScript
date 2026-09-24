import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import Link from 'next/link';
import CrossButton from './Buttons/crossButton';


interface ListedWorkoutCardProps {
    fitLog: FitLogType,
    activeTab: "plan" | "saved"
}

const ListedWorkoutCard = ({ fitLog, activeTab }: ListedWorkoutCardProps) => {
    return (
        <div className="group rounded-2xl border border-base-300 bg-base-200 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">

                {/* Thumbnail */}
                <div className="w-full md:w-32 lg:w-36 h-full md:h-32 lg:h-36 shrink-0 overflow-hidden rounded-xl">
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
                        <h2 className="text-lg md:text-xl font-extrabold uppercase tracking-tight truncate">
                            {fitLog.name}
                        </h2>

                        <p className="mt-1 text-sm text-base-content/60">
                            {fitLog.equipment}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4  lg:self-auto lg:flex-row lg:items-center lg:justify-between">

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">

                            <span className="inline-flex items-center gap-1">
                                <span className="text-[#ccff00] leading-none">◯</span>
                                {fitLog.duration} min
                            </span>

                            <span className="inline-flex items-center gap-1">
                                <span className="text-[#ccff00] text-xl leading-none">🔥︎</span>
                                {fitLog.caloriesBurned} kcal
                            </span>

                            <span className="inline-flex items-center gap-1">
                                <span className="text-[#ccff00] text-xl leading-none">★</span>
                                {fitLog.rating}
                            </span>

                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-2 ">
                            <Link href={`/${fitLog.id}`}>
                                <button className="btn btn-neutral bg-base-200 border border-gray-500 px-5 rounded-3xl">View Details</button>
                            </Link>

                            {
                                activeTab === "plan" ? 
                                <button className="btn btn-success bg-[#ccff00] text-black rounded-3xl px-5">Mark as Done</button>
                                :
                                ""
                            }


                            <CrossButton fitLog={fitLog} activeTab={activeTab}></CrossButton>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedWorkoutCard;