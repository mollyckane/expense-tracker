import { useExpenses } from './hooks/useExpenses';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { SummaryCard } from './components/SummaryCard';
import { ExpenseChart } from './components/ExpenseChart';

function App() {
  const { expenses, addExpense, deleteExpense } = useExpenses();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">💸 Expense Tracker</h1>
        <ExpenseForm onAdd={addExpense} />
        <SummaryCard expenses={expenses} />
        <ExpenseChart expenses={expenses} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
}

export default App;