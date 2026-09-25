'use client'
import { FitLogsContext } from "@/context/fitLogscontext";
import { FitLogType } from "@/types/fitLogType";
import { useContext } from "react";


const MarkAsDoneButton = ({ fitLog }: { fitLog: FitLogType }) => {

    const { completedWorkoutsArr, setCompletedWorkoutsArr } = useContext(FitLogsContext);

    let done = false;
    if (completedWorkoutsArr.find(elem => elem.id === fitLog.id)) {
        done = true;
    }

    const handleMarkAsDoneButton = (workout: FitLogType) => {
        if (done){
            
            setCompletedWorkoutsArr(completedWorkoutsArr.filter(elem => elem.id !== workout.id));
   
        }
        else{
            setCompletedWorkoutsArr([...completedWorkoutsArr, workout]);
        }
        return;
    }
    return (
        <button onClick={() => handleMarkAsDoneButton(fitLog)} className={`btn btn-success  text-black rounded-3xl px-5 ${done ? "bg-blue-400" : "bg-[#ccff00]"}`}>{done ? "✓ Completed" : "Mark as Done"}</button>
    );
};

export default MarkAsDoneButton;