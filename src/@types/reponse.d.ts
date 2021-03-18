interface User {
  id: number;
  name: string;
  email: string;
}

// TODO: replace this
interface TransactionOverView {
  name: string;
  value: number;
}

// TODO: replace this
interface NetIncomeData {
  name: string;
  income: number;
  expense: number;
}

// Category
interface ShortCategory {
  id: number;
  name: string;
  type: "Expense" | "Income";
  children: ShortCategory[];
}

interface Category extends Omit<ShortCategory, "children"> {
  parent: Category;
  user: User;
}

// Transactions
interface ShortTransaction {
  id: number;
  note: string;
  amount: number;
  date: string;
  category: string;
}

interface Transaction extends ShortTransaction {
  exclude: boolean;
  user: User;
  wallet: {
    id: number;
    name: string;
    currency: string;
    balance: number;
    exclude: boolean;
    archived: boolean;
  };
  category: Category;
}
