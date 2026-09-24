'use client'
import { FitLogsContext } from "@/context/fitLogscontext";
import { FitLogType } from "@/types/fitLogType";
import { useContext } from "react";
import { toast } from "react-toastify";

interface CrossButtonProps {
    fitLog: FitLogType,
    activeTab: "plan" | "saved"
}

const CrossButton = ({ fitLog, activeTab }: CrossButtonProps) => {

    const { plansArr, setPlansArr, laterArr, setLaterArr } = useContext(FitLogsContext);

    const handleCrossButton = () => {
        if (activeTab === "plan") {
            const newPlansArr = plansArr.filter(plan => plan.id !== fitLog.id);
            setPlansArr(newPlansArr);
            toast.info("Removed from today's plan!");
            return;
        }
        else if (activeTab==="saved"){
            const newLaterArr = laterArr.filter(later => later.id !== fitLog.id);
            setLaterArr(newLaterArr);
            toast.info("Removed from saved list!");
            return;
        }
    }


    return (
        <div>
            <button onClick={handleCrossButton} className="btn btn-sm btn-circle btn-ghost hover:text-error text-lg">✕</button>
        </div>
    );
};

export default CrossButton;