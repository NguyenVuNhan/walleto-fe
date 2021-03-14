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
  category: {
    id: number;
    name: string;
    type: string;
  };
}
