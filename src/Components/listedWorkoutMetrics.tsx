import { FitLogType } from "@/types/fitLogType";


const ListedWorkoutMetrics = ({currentArr}: {currentArr: FitLogType[]}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

            <div className="rounded-2xl bg-base-200 border border-base-300 p-5">
                <p className="text-xs font-semibold text-base-content/50 uppercase">
                    Exercises
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                    {currentArr.length}
                </p>
            </div>

            <div className="rounded-2xl bg-base-200 border border-base-300 p-5">
                <p className="text-xs font-semibold text-base-content/50 uppercase">Minutes
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                    {currentArr.reduce((acc, elem) => acc + elem.duration, 0)}
                </p>
            </div>

            <div className="rounded-2xl bg-base-200 border border-base-300 p-5">
                <p className="text-xs font-semibold text-base-content/50 uppercase">Calories
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                    {currentArr.reduce((acc, elem) =>
                        acc + elem.caloriesBurned, 0)}
                </p>
            </div>
        </div>
    );
};

export default ListedWorkoutMetrics;