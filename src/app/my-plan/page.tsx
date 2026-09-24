"use client";

import { useContext, useState } from "react";
import { FitLogsContext } from "@/context/fitLogscontext";
import ListedWorkoutCard from "@/Components/listedWorkoutCard";
import EmptyWorkoutList from "@/Components/emptyWorkoutList";
import ListedWorkoutMetrics from "@/Components/listedWorkoutMetrics";

const MyPlanPage = () => {
    const { plansArr, laterArr } = useContext(FitLogsContext);
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    return (
        <main className="w-10/12 max-w-7xl mx-auto py-8 sm:py-10">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">MY PLAN
                </h1>

                <p className="mt-2 text-sm sm:text-base text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* Metrics */}
            <ListedWorkoutMetrics currentArr = {activeTab==="plan" ? plansArr : laterArr}></ListedWorkoutMetrics>

            {/* Tab */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Today's Plan" defaultChecked 
                onChange={() => setActiveTab("plan")}/>

                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
                    {
                        plansArr.length < 1 ?
                            <EmptyWorkoutList></EmptyWorkoutList>
                            :
                            plansArr.map(fitLog => <ListedWorkoutCard key={fitLog.id} fitLog={fitLog}></ListedWorkoutCard>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Saved" onChange={() => setActiveTab("saved")} />

                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
                    {
                        laterArr.length < 1 ?
                            <EmptyWorkoutList></EmptyWorkoutList>
                            :
                            laterArr.map(fitLog => <ListedWorkoutCard key={fitLog.id} fitLog={fitLog}></ListedWorkoutCard>)
                    }
                </div>

            </div>

        </main>
    );
};

export default MyPlanPage;