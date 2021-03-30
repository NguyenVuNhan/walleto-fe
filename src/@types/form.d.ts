interface LoginForm {
  name_email: string;
  password: string;
}

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  cpassword: string;
}

interface TransactionForm {
  note: string;
  amount: number;
  date: string;
  exclude: boolean;
  categoryId: number;
  walletId: number;
}

interface WalletForm {
  name: string;
  currency: string;
  balance?: number;
  exclude?: boolean;
}

interface CategoryForm {
  name: string;
  type: "Expense" | "Income";
  parent?: number;
}
