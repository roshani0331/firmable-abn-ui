# Firmable ABN Lookup - Frontend Assessment

This project is a functional and responsive frontend UI for searching and exploring business entities from the **Australian Business Register's ABN Bulk Extract** dataset.

Built as part of the technical assessment for the Frontend Developer role at **Firmable**.

---

## Live Demo

> *[Deploy link here (Vercel)]* (http://firmable-abn-ui-iacr.vercel.app/)

---

## Dataset Source

- **ABN Bulk Extract** from [data.gov.au](https://data.gov.au/data/dataset/abn-bulk-extract)
- A parsed and filtered version of this dataset was used to extract key fields like:
  - ABN, entity name, entity type, registration status, postcode, and state
- Data was normalized and stored in a local JSON file.
- This ensures real-world simulation while maintaining optimal performance during frontend development

---

## Features

-  Debounced global search (by name, ABN, state)
-  Filter by State, Status, Entity Type
-  Responsive UI (MUI DataGrid with pagination)
-  Dark/Light Theme Toggle
-  Click-to-view business modal
-  Instant filtering with React Query + local memoization
-  Data table with sorting and pagination

---

## 🛠️ Tech Stack

| Layer              | Technology                                    |
| ------------------ | --------------------------------------------- |
| Frontend           | React 19 + TypeScript + Vite                  |
| UI Library         | Material UI v7 + MUI X DataGrid v8            |
| State/Async        | TanStack React Query                          |
| Styling            | Emotion (CSS-in-JS)                           |
| Build Tool         | Vite                                          |
| Package Manager    | npm                                           |

---

## Folder Structure

```
src/
├── components/       // Reusable UI components
│   ├── BusinessTable.tsx    // DataGrid component
│   ├── BusinessCard.tsx     // Card view component
│   ├── BusinessModal.tsx    // Business details modal
│   ├── Filters.tsx          // Filter controls
│   └── SearchBar.tsx        // Search input
├── pages/            // Page components
├── hooks/            // Custom React hooks
├── services/         // API abstraction
├── types/            // TypeScript type definitions
└── theme.ts          // MUI theme configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18.x LTS or higher
- **npm**: Version 8 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/roshani0331/firmable-abn-ui
   cd firmable-abn-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## Troubleshooting

### Common Issues

1. **"crypto.hash is not a function" error**
   - **Solution**: Ensure you're using Node.js 18.x LTS
   - **Check version**: `node --version`
   - **Update Node.js**: Download from [nodejs.org](https://nodejs.org/)

2. **TypeScript compilation errors**
   - **Solution**: Clean and reinstall dependencies
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port already in use**
   - **Solution**: Kill the process or use a different port
   ```bash
   npm run dev -- --port 3001
   ```

### Development Tips

- The app uses **verbatimModuleSyntax** for strict TypeScript imports
- Use `import type` for type-only imports
- MUI DataGrid v8 uses `initialState` for pagination configuration
- Use `pageSizeOptions` instead of `rowsPerPageOptions`

---

## License

Data used under Creative Commons 3.0 License via data.gov.au.

---

## Acknowledgements

- [data.gov.au ABN dataset](https://data.gov.au/data/dataset/abn-bulk-extract)
- [Material UI](https://mui.com/) for the component library
- [TanStack Query](https://tanstack.com/query) for data fetching
- Inspiration from ZoomInfo, Lusha, Apollo.io
