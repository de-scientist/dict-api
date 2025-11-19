# 📘 **React Dictionary App**

A clean, fast, modern dictionary powered by **Axios**, **React Query**, **Zustand (persist)**, **shadcn/ui**, and **React Router**.

This project is crafted with a smooth developer experience in mind — modular components, elegant routing, theme support, and delightful UI micro-interactions.

---

## 🚀 **Features**

### 🔍 **Search Definitions Instantly**

* Uses the free **dictionaryapi.dev** API
* Debounced search + error states
* Clean UI with `shadcn/ui`

### 🎧 **Pronunciation Audio Player**

* Smooth play/pause button
* Handles edge cases (missing audio, blocking browsers)

### 💀 **Skeleton Loaders (shadcn style)**

* Animated loading placeholders using Tailwind
* Helps maintain visual flow while fetching

### 🕒 **Recent Search History (Persisted)**

* Powered by **Zustand + zustand/middleware persist**
* Saved across page reloads
* Nicely styled history chips
* Click to auto-load a previous search

### 🌓 **Theme Toggle (Dark/Light Mode)**

* Full app theme system
* Uses the shadcn/ui theme architecture

### 🧭 **Routing & Layout System**

* `/` → dictionary search page
* `/about` → about/project info
* Layout with header, footer, nav, and theme toggle

---

## 📦 **Tech Stack**

| Layer            | Technology          |
| ---------------- | ------------------- |
| UI Components    | shadcn/ui           |
| State Management | Zustand (persist)   |
| Data Fetching    | React Query + Axios |
| Routing          | React Router DOM    |
| Styling          | Tailwind CSS        |
| Build Tool       | Vite                |

---

## 📥 **Installation**

```bash
npm install
npm install @tanstack/react-query axios zustand zustand/middleware
npm install react-router-dom
npm install clsx tailwind-merge
npm install shadcn-ui --save-dev
```

Run the dev server:

```bash
npm run dev
```

---

## 📁 **Project Structure**

```
src/
 ├─ components/
 │   ├─ SearchBar.tsx
 │   ├─ DictionaryCard.tsx
 │   ├─ DefinitionBlock.tsx
 │   ├─ AudioPlayer.tsx
 │   ├─ SkeletonDef.tsx
 │   └─ HistoryList.tsx
 │
 ├─ store/
 │   └─ useWordStore.ts
 │
 ├─ lib/
 │   └─ fetchDefinition.ts
 │
 ├─ pages/
 │   ├─ Home.tsx
 │   └─ About.tsx
 │
 ├─ layout/
 │   └─ Layout.tsx
 │
 └─ main.tsx
```

---

## 🔗 **API Used**

> **Dictionary API** — Free, no-auth, open source.

Base URL:

```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

---

## 🎨 **Design Philosophy**

* Minimalist yet expressive
* Smooth interactions, no noise
* Thoughtful spacing & typography
* Dark/light harmony
* A UX meant to *breathe*

---

## 🤝 **Contributions**

Pull requests are welcome. For major changes, please open an issue first to discuss.

---

## 📜 **License**

MIT License — open for learning, tweaking, and building.

---

## ✨ **Author**

Built with curiosity, discipline, and imagination — weaving tech and poetry into one crea
