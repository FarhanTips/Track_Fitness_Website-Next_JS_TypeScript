import { getFitLogs } from "@/lib/getFit";
import FitLogCard from "./fitLogCard";


const HomeLibrary = async () => {
    const fitLogs = await getFitLogs();
    return (
        <div className="w-10/12 mx-auto " id="library">
            <div className="mb-10">
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                    THE LIBRARY
                </h2>

                <p className="mt-2 text-sm text-base-content/60 md:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fitLogs.map(fitLog => <FitLogCard key={fitLog.id} fitLog={fitLog}></FitLogCard>)}
            </div>

        </div>
    );
};

export default HomeLibrary;