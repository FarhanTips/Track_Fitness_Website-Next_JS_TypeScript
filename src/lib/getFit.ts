import { FitLogType } from "@/types/fitLogType";


export const getFitLogs = async (): Promise<FitLogType[]> => {
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
        const data = await res.json();
        return data;
    }catch(error){
        console.error("Error fetching books:", error);
        return [];
    }

}