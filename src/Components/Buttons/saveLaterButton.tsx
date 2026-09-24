'use client';
import { FitLogsContext } from '@/context/fitLogscontext';
import { FitLogType } from '@/types/fitLogType';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const SaveLaterButton = ({ fitLog }: { fitLog: FitLogType }) => {

    const { laterArr, setLaterArr } = useContext(FitLogsContext);

    const handleSaveLaterButton = () => {
        const alreadyExists = laterArr.find(plan => plan.id === fitLog.id);
        if (alreadyExists) {
            toast.error("Already in your saved list!");
            return;
        }
        setLaterArr([...laterArr, fitLog]);
        toast.success("Saved for later");

    }
    return (
        <div>
            <button onClick={handleSaveLaterButton} className="btn btn-neutral bg-base-200 border border-gray-500 px-9 rounded-xl">▯ Save for later</button>
        </div>
    );
};

export default SaveLaterButton;