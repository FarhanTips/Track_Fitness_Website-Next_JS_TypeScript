import AddPlanButton from '@/Components/Buttons/addPlanButton';
import SaveLaterButton from '@/Components/Buttons/saveLaterButton';
import { getFitLogs } from '@/lib/getFit';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface WorkoutDetailsProps {
    params: Promise<{
        slug: string;
    }>;
}

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { slug } = await params;
    const fitLogs = await getFitLogs();
    const fitLog = fitLogs.find(fitLog => fitLog.id === Number(slug));

    if (!fitLog) {
        notFound();
    }

    return (
        <main className="w-10/12 max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* Left Side - Image */}
                <div className="overflow-hidden rounded-2xl">
                    <Image
                        src={fitLog.image}
                        alt={fitLog.name}
                        width={800}
                        height={600}
                        className="w-full h-100 sm:h-120 md:h-150 lg:h-187.5 object-cover rounded-2xl"
                    />
                </div>

                {/* Right Side */}
                <div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                        {fitLog.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-base text-base-content/60 leading-relaxed">
                        {fitLog.description}
                    </p>

                    {/* Category Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {fitLog.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Key Specs */}
                    <div className="mt-7 rounded-2xl border border-gray-500 overflow-hidden">
                        <div className="flex justify-between border-b border-gray-500 px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">EQUIPMENT</span>
                            <span className="font-bold">{fitLog.equipment}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-500 px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">DIFFICULTY</span>
                            <span className="font-bold">{fitLog.difficulty}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-500 px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">SETS</span>
                            <span className="font-bold">{fitLog.sets}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-500 px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">REPS</span>
                            <span className="font-bold">{fitLog.reps}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-500 px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">DURATION</span>
                            <span className="font-bold">{fitLog.duration} min</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-500 px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">CALORIES</span>
                            <span className="font-bold">{fitLog.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between px-4 py-3">
                            <span className="text-xs font-semibold text-base-content/50">RATING</span>
                            <span className="font-bold"> {fitLog.rating}</span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h2 className="text-xl font-extrabold">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-4 space-y-4 list-decimal list-inside text-[#d1d5db]">
                            {fitLog.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="text-sm leading-relaxed"
                                >
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <AddPlanButton fitLog={fitLog}></AddPlanButton>
                        <SaveLaterButton fitLog={fitLog}></SaveLaterButton>
                    </div>

                </div>
            </div>
        </main>
    );

};

export default WorkoutDetails;