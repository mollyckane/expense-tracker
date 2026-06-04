import type { Expense } from '../types/expense';

interface Props {
    expenses: Expense[];
    onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: Props) {
    if (expenses.length === 0) {
        return <p className="text-center text-gray-400 mt-4">No expenses added yet. Add one above!</p>;
    }

    return (
        <div className="bg-white rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold p-4 border-b">Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id} className="flex justify-between items-center p-4 border-b last:border-none">
                        <div>
                            <p className="font-medium">{expense.name}</p>
                            <p className="text-sm text-gray-400">{expense.category} • {expense.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold">€{expense.amount.toFixed(2)}</span>
                            <button
                                onClick={() => onDelete(expense.id)}
                                className="text-red-400 hover:text-red-600 transition text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}