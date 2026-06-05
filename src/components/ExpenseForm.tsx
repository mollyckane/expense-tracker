import { useState } from 'react';
import type { Expense, Category } from '../types/expense';

const CATEGORIES: Category[] = [
    'Food',
    'Transportation',
    'Entertainment',
    'Utilities',
    'Healthcare',
    'Education',
    'Miscellaneous'
];

interface Props {
    onAdd: (expense: Expense) => void;
}

export function ExpenseForm({ onAdd }: Props) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState<Category>('Food');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !amount) return;

        const newExpense: Expense = {
            id: crypto.randomUUID(),
            name,
            amount: parseFloat(amount),
            category,
            date: new Date().toLocaleDateString('en-IE'),
        };
        onAdd(newExpense);
        setName('');
        setAmount('');
        setCategory('Food');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6 flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Add Expense</h2>
            <input type="text" placeholder="Expense name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} className="border rounded-lg p-2 w-full"/>
            <input type="number" placeholder="Amount (€)" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setAmount(e.target.value)} className="border rounded-lg p-2 w-full"/>
            <select value={category} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setCategory(e.target.value as Category)} className="border rounded-lg p-2 w-full">
                {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition rounded-xl cursor-pointer">Add Expense</button>
        </form>
        );
}