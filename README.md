# 💪 FitLog - Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of workouts, lock lifts into today's plan, save lifts for later, and track your minutes and calories as you go.

**🔗 Live Site:** [fit-log-eight-eta.vercel.app](https://fit-log-eight-eta.vercel.app)

---

## 🛠️ Technologies Used

- **Next.js (App Router)** - routing, server components, and data fetching
- **DaisyUI** - pre-built accessible UI components on top of Tailwind 
- **TypeScript** - type-safe components and data models
- **Tailwind CSS** - styling and full responsiveness (mobile, tablet, desktop)
- **React Context API** - global state for Today's Plan, Saved list, and live counters
- **React Toastify** - toast notifications for user actions
- **Lucide React** - icon set used across the UI

---

## ✨ Features

1. **Responsive Workout Library** - browse all workouts in a 3x4 grid on desktop that collapses gracefully on tablet and mobile, each card showing an image, category tags, equipment, and a stats row (duration, calories, rating).

2. **Workout Detail Pages** - a dedicated page per workout with a large image, description, category tags, a key-specs panel (equipment, difficulty, sets, reps, duration, calories, rating), and step-by-step instructions.

3. **My Plan Dashboard** - add lifts to Today's Plan or Save them for later, with a live-updating summary of total exercises, minutes, and calories, plus tabs to switch between Today's Plan and Saved lists.

4. **Sort & Manage Workouts** - sort any list by Duration, Calories, or Rating, mark workouts as done, or remove them from your plan - all reflected instantly in the navbar badge counters.

5. **Toast Notifications & Empty/Loading States** - clear toast feedback for every add, save, done, and remove action, along with friendly "Nothing here yet" empty states and animated loading states while data is fetched.

6. **Custom 404 Page** - a branded not-found page for any invalid route, with a quick link back to the workout library.

---

## 🚀 Getting Started

```bash
git clone https://github.com/shorafothoshen/Fit-Log.git
cd Fit-Log
npm install
npm run dev
```

---

## 📄 License

This project was built as part of the Programming Hero Batch 14 curriculum, Assignment 6.