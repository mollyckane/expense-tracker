import type { Expense, Category  } from '../types/expense';

const CATEGORIES: Category[] = [
    'Food',
    'Transportation',
    'Entertainment',
    'Utilities',
    'Healthcare',
    'Education',
    'Miscellaneous'
];

interface SummaryCardProps {
    expenses: Expense[];
}

export function SummaryCard({ expenses }: SummaryCardProps) {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    const byCategory = CATEGORIES.map((cat) => ({
        category: cat,
        total: expenses
            .filter((e) => e.category === cat)
            .reduce((sum, e) => sum + e.amount, 0),      
    })).filter((c) => c.total > 0);

    return (
        <div className="bg-white rounded-xl shadow mb-6 p-4">
            <h2 className="text-xl font-semibold mb-3">Summary</h2>
            <p className="text-3xl font-bold text-blue-500 mb-4">Total: €{total.toFixed(2)}</p>
            <ul className="flex flex-col gap-2">
                {byCategory.map(({category, total}) => (
                    <li key={category} className="flex justify-between text-sm text-gray-600">
                        <span>{category}</span>
                        <span>€{total.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}