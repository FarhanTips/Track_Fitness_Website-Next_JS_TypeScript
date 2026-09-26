"use client";

import { useContext, useState } from "react";
import { FitLogsContext } from "@/context/fitLogscontext";
import ListedWorkoutCard from "@/Components/listedWorkoutCard";
import EmptyWorkoutList from "@/Components/emptyWorkoutList";
import ListedWorkoutMetrics from "@/Components/listedWorkoutMetrics";
import { FitLogType } from "@/types/fitLogType";

type SortType = "duration" | "calories" | "rating";

const MyPlanPage = () => {
    console.log(typeof window, "hello my path");
    const { plansArr, laterArr } = useContext(FitLogsContext);
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<SortType>("duration");

    const sortWorkoutList = (workoutList: FitLogType[]) => {
        const sortedWorkoutList = [...workoutList];
        if (sortBy === "duration") {
            sortedWorkoutList.sort((a, b) => b.duration - a.duration);
        }
        else if (sortBy === "calories") {
            sortedWorkoutList.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        else if (sortBy === "rating") {
            sortedWorkoutList.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorkoutList;
    }

    const sortedPlansArr = sortWorkoutList(plansArr);
    const sortedLaterArr = sortWorkoutList(laterArr);

    return (
        <main className="w-10/12 max-w-7xl mx-auto pb-8  sm:pb-10">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">MY PLAN
                </h1>

                <p className="mt-2 text-sm sm:text-base text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* Metrics */}
            <ListedWorkoutMetrics currentArr={activeTab === "plan" ? plansArr : laterArr}></ListedWorkoutMetrics>

            {/* Sort */}
            <div className="flex gap-4 justify-end items-center mt-10">
                <p className="text-base text-gray-400">Sort By</p>
                <select value={sortBy}
                    className="select select-info rounded-full w-32 font-semibold"
                    onChange={(e) => setSortBy(e.target.value as SortType)}>

                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            {/* Tab */}
            <div className="tabs tabs-lift mb-20">
                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Today's Plan" defaultChecked
                    onChange={() => setActiveTab("plan")} />

                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
                    {
                        plansArr.length < 1 ?
                            <EmptyWorkoutList></EmptyWorkoutList>
                            :
                            sortedPlansArr.map(fitLog => <ListedWorkoutCard key={fitLog.id} fitLog={fitLog} activeTab={activeTab}></ListedWorkoutCard>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab font-semibold" aria-label="Saved" onChange={() => setActiveTab("saved")} />

                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
                    {
                        laterArr.length < 1 ?
                            <EmptyWorkoutList></EmptyWorkoutList>
                            :
                            sortedLaterArr.map(fitLog => <ListedWorkoutCard key={fitLog.id} fitLog={fitLog} activeTab={activeTab}></ListedWorkoutCard>)
                    }
                </div>

            </div>

        </main>
    );
};

export default MyPlanPage;