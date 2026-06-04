import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import type { Expense } from '../types/expense';

interface Props {
    expenses: Expense[];
}

const COLORS = [ '#3b82f6', '#f97316', '#8b5cf6', '#10b981', '#f59e0b'];

export function ExpenseChart({ expenses }: Props){
    const data = expenses.reduce<{ name: string; value: number; }[]>((acc, e) => {
        const existing = acc.find((item) => item.name === e.category);
        if(existing) existing.value += e.amount;
        else acc.push({ name: e.category, value: e.amount });
        return acc;
        }, []);

        if (data.length === 0 ) {
            return <p className="text-center text-gray-400">Add expenses to see the chart.</p>;
        }

        return (
            <div className="bg-white rounded-x1 shadow mb-6 p-4">
                <h2 className="text-xl font-semibold mb-3">Spending Breakdown
                </h2>
            <div className="flex justify-center">
                <PieChart width={340} height={300}>
                    <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
                        {data.map((_, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                            ))
                        }
                    </Pie>
                    <Tooltip formatter={(value) => typeof value === 'number' ? `€${value.toFixed(2)}` : value }/>
                    <Legend/>
                </PieChart>
            </div>
        </div>
    );
}