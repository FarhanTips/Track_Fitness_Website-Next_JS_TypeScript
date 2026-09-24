import Link from 'next/link';


const EmptyWorkoutList = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">

            <h2 className="text-2xl sm:text-3xl font-extrabold">NOTHING HERE YET</h2>

            <p className="mt-3 max-w-md text-sm sm:text-base text-gray-400">Browse the library and add a lift to get today moving.</p>

            <Link href="/"
                className="mt-6 btn bg-[#ccff00] text-black border-none rounded-3xl px-6">Go to workouts
            </Link>

        </div>
    );
};

export default EmptyWorkoutList;