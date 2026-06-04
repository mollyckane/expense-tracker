export type Category =
    | 'Food'
    | 'Transportation'
    | 'Entertainment'
    | 'Utilities'
    | 'Healthcare'
    | 'Education'
    | 'Miscellaneous';

export interface Expense {
    id: string;
    name: string;
    amount: number;
    category: Category;
    date: string;
}

export type ExpenseAction = 
    | { type: 'ADD_EXPENSE'; payload: Expense }
    | { type: 'DELETE_EXPENSE'; payload: string };