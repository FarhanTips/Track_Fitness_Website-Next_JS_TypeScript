import { getFitLogs } from "@/lib/getFit";
import FitLogCard from "./fitLogCard";


const HomeLibrary = async () => {
    const fitLogs = await getFitLogs();
    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-3 gap-6">
                {fitLogs.map(fitLog => <FitLogCard key={fitLog.id} fitLog={fitLog}></FitLogCard>)}
            </div>

        </div>
    );
};

export default HomeLibrary;