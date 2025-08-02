# Firmable ABN Lookup - Frontend Assessment

This project is a functional and responsive frontend UI for searching and exploring business entities from the **Australian Business Register's ABN Bulk Extract** dataset.

Built as part of the technical assessment for the Frontend Developer role at **Firmable**.

---

## 🚀 Live Demo

> *Deploy link here (Vercel / Netlify)*

---

## 📊 Dataset Source

- **ABN Bulk Extract** from [data.gov.au](https://data.gov.au/data/dataset/abn-bulk-extract)
- A parsed and filtered version of this dataset was used to extract key fields like:
  - ABN, entity name, entity type, registration status, postcode, and state
- Data was normalized and stored in a local JSON file.
- This ensures real-world simulation while maintaining optimal performance during frontend development

---

## 🧠 Features

- 🔍 Debounced global search (by name, ABN, state)
- 🎯 Filter by State, Status, Entity Type
- 📱 Responsive UI (MUI Grid → DataGrid or Cards based on screen)
- 🌗 Dark/Light Theme Toggle
- 🔘 Click-to-view business modal
- ⚡ Instant filtering with React Query + local memoization

---

## 🛠️ Tech Stack

| Layer              | Technology                                    |
| ------------------ | --------------------------------------------- |
| Frontend           | React + TypeScript + Vite                     |
| UI Library         | Material UI (v5)                              |
| State/Async        | React Query                                   |
| Backend (optional) | Express + JSON or SQLite                      |
| Hosting            | Vercel / Netlify (UI)                         |

---

## 📁 Folder Structure

```
src/
├── components/       // Reusable UI components (SearchBar, Filters, Cards)
├── pages/            // HomePage with layout logic
├── hooks/            // useDebounce custom hook
├── services/         // API abstraction
├── types/            // Type definitions for Business
└── theme.ts          // Theme toggle config
```

---

## 🏁 How to Run Locally

```bash
git clone https://github.com/your-username/firmable-abn-lookup.git
cd firmable-abn-lookup
npm install
npm run dev
```

---

## 📎 License

Data used under Creative Commons 3.0 License via data.gov.au.

---

## 🙏 Acknowledgements

- [data.gov.au ABN dataset](https://data.gov.au/data/dataset/abn-bulk-extract)
- Inspiration from ZoomInfo, Lusha, Apollo.io
