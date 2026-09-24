'use client'
import { FitLogType } from '@/types/fitLogType';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface FitLogsContextType {
    plansArr: FitLogType[];
    setPlansArr: Dispatch<SetStateAction<FitLogType[]>>;
    laterArr: FitLogType[];
    setLaterArr: Dispatch<SetStateAction<FitLogType[]>>;
}
export const FitLogsContext = createContext<FitLogsContextType>({
    plansArr: [],
    setPlansArr: () => { },
    laterArr: [],
    setLaterArr: () => { }
});

const FitLogProvider = ({children} : { children: ReactNode }) => {
    const [plansArr, setPlansArr] = useState<FitLogType[]>([]);
    const [laterArr, setLaterArr] = useState<FitLogType[]>([]);

    const sharedData : FitLogsContextType = {
        plansArr,
        setPlansArr,
        laterArr,
        setLaterArr
    }

    return (
        <FitLogsContext.Provider value ={sharedData}>
            {children}
        </FitLogsContext.Provider>
    );
};

export default FitLogProvider;