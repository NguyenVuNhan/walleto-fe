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

interface TransactionsForm {}

interface CategoryForm {
  name: string;
  type: "Expense" | "Income";
  parent?: number;
}
