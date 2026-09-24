'use client';

import { FitLogsContext } from "@/context/fitLogscontext";
import { FitLogType } from "@/types/fitLogType";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddPlanButton = ({fitLog} : {fitLog: FitLogType}) => {
    const {plansArr, setPlansArr} = useContext(FitLogsContext);

    const handleAddPlanButton = () =>{
        const alreadyExists = plansArr.find(plan => plan.id === fitLog.id);
        if (alreadyExists){
            toast.error("Already in your plan!");
            return;
        }
        setPlansArr([...plansArr, fitLog]);
        toast.success("Added to today's plan");

    }
    return (
        <div>
            <button onClick={handleAddPlanButton} className="btn btn-success bg-[#ccff00] text-black rounded-xl px-6">▢ Add to today&apos;s plan</button>
        </div>
    );
};

export default AddPlanButton;