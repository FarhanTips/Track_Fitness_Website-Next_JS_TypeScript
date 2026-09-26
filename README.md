# FITLOG

### Train with intent. Log every set.

FitLog is a modern workout planning and tracking application built with Next.js, React, TypeScript and Tailwind CSS. It provides a clean and responsive platform for discovering workouts, creating daily plans, saving workouts for later and tracking completed sessions.

Designed with a component-based architecture and React Context API for global state management, FitLog focuses on a smooth, responsive, and intuitive workout management experience.
## Tech Stack

* **Next.js** — App Router, Server Components & dynamic routes
* **React** — Component-based UI and client-side interactions
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Responsive styling
* **DaisyUI** — UI components and theme utilities
* **React Context API** — Global workout state management

## Key Features

1. **Workout Library**

   * Browse workouts with images, muscle groups, equipment, difficulty, duration, calories, sets, reps, ratings and descriptions.
   * Responsive workout grid across mobile, tablet and desktop.

2. **Workout Details**

   * Dedicated dynamic pages for individual workouts.
   * View complete workout information, specifications, equipment and step-by-step instructions.
   * Add workouts directly to today's plan or save them for later.

3. **Today's Plan & Saved Workouts**

   * Add workouts to today's plan with a maximum plan limit.
   * Save workouts for later.
   * Remove workouts from either list.
   * Separate **Plan** and **Saved** tabs for easy management.

4. **Workout Tracking**

   * Mark workouts as completed.
   * Toggle completed status.
   * View completed workout information and manage completion status.

5. **Smart Workout Management**

   * Sort planned/saved workouts by **duration, calories or rating**.
   * Prevent duplicate workout entries.
   * Clear disabled states and feedback when plan limits are reached.

## UI & Experience

* Dark, modern gym-focused design
* Fully responsive layout
* Reusable React components
* Smooth section navigation
* Responsive navigation and workout cards
* Loading states for route/data loading
* Custom not-found handling for invalid workout routes
* Optimized images with Next.js Image
