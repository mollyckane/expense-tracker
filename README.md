# Expense Tracker

A personal expense tracking app built with React and TypeScript.

## Features

- Add expenses with a name, amount, category and date
- Delete expenses from the list
- Summary card showing total spend and breakdown per category
- Pie chart visualisation of spending by category
- Data persists on page refresh via localStorage

## Tech Stack

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for project setup and dev server
- [Recharts](https://recharts.org/) for pie chart visualisation
- [Tailwind CSS v4](https://tailwindcss.com/) for styling

## Key Concepts Demonstrated

- Custom hook with `useReducer` and typed union actions
- Fully typed component props and interfaces
- Typed event handlers (`React.ChangeEvent`, `React.FormEvent`)
- localStorage persistence via `useEffect`
- Component composition and separation of concerns

## Getting Started

```bash
npm install
npm run dev
```

## Author

Molly C Kane -- [GitHub](https://github.com/mollyckane/)