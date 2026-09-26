'use client';

import { FitLogsContext } from "@/context/fitLogscontext";
import { FitLogType } from "@/types/fitLogType";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddPlanButton = ({ fitLog }: { fitLog: FitLogType }) => {
    const { plansArr, setPlansArr } = useContext(FitLogsContext);

    const handleAddPlanButton = () => {

        const alreadyExists = plansArr.find(plan => plan.id === fitLog.id);
        if (alreadyExists) {
            toast.error("Already in your plan!");
            return;
        }
        setPlansArr([...plansArr, fitLog]);
        toast.success("Added to today's plan");

    }
    return (
        <div>
            <button disabled={plansArr.length >= 5}
                onClick={handleAddPlanButton}
                className="btn btn-success bg-[#ccff00] text-black rounded-xl px-6  disabled:bg-gray-500 disabled:text-gray-400">{plansArr.length >= 5
                    ? "⚠️ Plan limit reached"
                    : "▢ Add to today's plan"}
            </button>
        </div>
    );
};

export default AddPlanButton;