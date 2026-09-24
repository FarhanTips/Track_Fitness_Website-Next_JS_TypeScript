import { FitLogType } from '@/types/fitLogType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FitLogCardProps {
    fitLog: FitLogType
}

const FitLogCard = ({ fitLog }: FitLogCardProps) => {
    return (
        <div>
            <Link href={`/${fitLog.id}`}>
                <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    {/* Image */}
                    <figure className="relative h-56 overflow-hidden">
                        <Image
                            src={fitLog.image}
                            alt={fitLog.name}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute right-4 top-4">
                            <span className="rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                                {fitLog.difficulty}
                            </span>
                        </div>
                    </figure>

                    {/* Content */}
                    <div className="p-5">

                        {/* Muscle Groups */}
                        <div className="mb-3 flex flex-wrap gap-2">
                            {fitLog.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#c2f800] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Workout Name */}
                        <h2 className="text-xl font-extrabold uppercase tracking-tight">{fitLog.name}
                        </h2>

                        {/* Equipment */}
                        <p className="mt-1 text-sm text-base-content/60">
                            {fitLog.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-5 flex items-center gap-5 border-t border-base-200 pt-2">

                            <div className="flex items-center gap-1.5 text-sm">
                                <span className="text-lg">◷</span>
                                <div>
                                    <p className="font-semibold">{fitLog.duration} min</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 text-sm">
                                <span className="text-lg">🔥︎</span>
                                <div>
                                    <p className="font-semibold">{fitLog.caloriesBurned} kcal</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 text-sm">
                                <span className="text-lg">⭐</span>
                                <p className="font-semibold">{fitLog.rating}</p>
                            </div>

                        </div>
                    </div>
                </div>
                </Link>
        </div>
    );
};

export default FitLogCard;