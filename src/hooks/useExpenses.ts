import { useReducer, useEffect} from 'react';
import type { Expense, ExpenseAction } from '../types/expense';

function reducer(state: Expense[], action: ExpenseAction): Expense[] {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'DELETE_EXPENSE':
      return state.filter((e)=> e.id !== action.id);
    default:
      return state;
  }
}

export function useExpenses(){
    const stored = localStorage.getItem('expenses');
    const initial: Expense[] = stored ? JSON.parse(stored) : [];

    const [expenses, dispatch] = useReducer(reducer, initial);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense: Expense) => {
        dispatch({ type: 'ADD_EXPENSE', payload: expense });
    };

    const deleteExpense = (id: string) => {
        dispatch({ type: 'DELETE_EXPENSE', id });
    };

    return { expenses, addExpense, deleteExpense };
}