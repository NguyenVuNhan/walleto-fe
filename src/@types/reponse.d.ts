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

// Wallet
interface ShortWallet {
  id: number;
  name: string;
  balance: number;
}

interface Wallet extends ShortWallet {
  currency: string;
  exclude: boolean;
  archived: boolean;
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
