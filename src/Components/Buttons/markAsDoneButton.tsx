'use client'
import { FitLogsContext } from "@/context/fitLogscontext";
import { FitLogType } from "@/types/fitLogType";
import { useContext } from "react";
import { toast } from "react-toastify";


const MarkAsDoneButton = ({ fitLog }: { fitLog: FitLogType }) => {

    const { completedWorkoutsArr, setCompletedWorkoutsArr } = useContext(FitLogsContext);

    let done = false;
    if (completedWorkoutsArr.find(elem => elem.id === fitLog.id)) {
        done = true;
    }

    const handleMarkAsDoneButton = (workout: FitLogType) => {
        if (done){
            
            setCompletedWorkoutsArr(completedWorkoutsArr.filter(elem => elem.id !== workout.id));
            toast.warning(`${workout.name} marked as incomplete.`);
   
        }
        else{
            setCompletedWorkoutsArr([...completedWorkoutsArr, workout]);
            toast.success(`${workout.name} completed!`);
        }
        return;
    }
    return (
        <button onClick={() => handleMarkAsDoneButton(fitLog)} className={`btn btn-success  text-black rounded-3xl px-5 ${done ? "bg-blue-400" : "bg-[#ccff00]"}`}>{done ? "✓ Completed" : "Mark as Done"}</button>
    );
};

export default MarkAsDoneButton;