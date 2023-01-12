import { Account } from "./classes/account";

export const initializeApp = () => {
  if (!localStorage.getItem("accounts")) {
    const admin = {
      role: "admin",
      email: "admin@tigom.com.ph",
      password: "tigom2022",
    };
    const accounts = { admin: [admin], users: [] };
    const bank = {
      balance: 0,
      transactions: [],
    };

    localStorage.setItem("bank", JSON.stringify(bank));
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
};

export const registerAccount = (data) => {
  const account = new Account(data);
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  accounts.users.push(account);
  localStorage.setItem("user", JSON.stringify(account));
  localStorage.setItem("accounts", JSON.stringify(accounts));
  return account;
};

export const loginAccount = (data) => {
  const { identity, password } = data;
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const admin = accounts.admin.find((account) => account.email === identity);
  if (admin?.password === password) {
    localStorage.setItem("user", JSON.stringify(admin));
    return admin;
  } else {
    const account = accounts.users.find(
      (account) => account.email === identity
    );
    if (account?.password === password) {
      localStorage.setItem("user", JSON.stringify(account));
      return account;
    } else return "";
  }
};

export const approveDeposit = (user, amount) => {
  const bank = JSON.parse(localStorage.getItem("bank"));
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const filtered = accounts.users.filter((account) => account.id !== user.id);
  // Transaction
  user.balance += amount;
  bank.balance += amount;
  // Update
  const record = {
    amount,
    type: "deposit",
    date: new Date(),
  };
  user.transactions.unshift(record);
  bank.transactions.unshift({ ...record, id: user.id });
  filtered.push(user);
  accounts.users = filtered;
  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("bank", JSON.stringify(bank));
};

export const approveWithdraw = (user, amount) => {
  const current = JSON.parse(localStorage.getItem("user"));
  const bank = JSON.parse(localStorage.getItem("bank"));
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const filtered = accounts.users.filter((account) => account.id !== user.id);
  // Transaction
  user.balance -= amount;
  bank.balance -= amount;
  // Update
  const record = {
    amount,
    type: "withdraw",
    date: new Date(),
  };
  user.transactions.unshift(record);
  bank.transactions.unshift({ ...record, id: user.id });
  filtered.push(user);
  accounts.users = filtered;
  if (current.role === "client")
    localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("bank", JSON.stringify(bank));
};

export const approveTransfer = (sender, receiver, amount) => {
  const current = JSON.parse(localStorage.getItem("user"));
  const bank = JSON.parse(localStorage.getItem("bank"));
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const filtered = accounts.users.filter(
    (account) => account.id !== sender.id && account.id !== receiver.id
  );
  console.log("filtered", filtered);
  // Transaction
  sender.balance -= amount;
  receiver.balance += amount;
  // Update
  const record = {
    amount,
    type: "transfer",
    sender: sender.id,
    receiver: receiver.id,
    date: new Date(),
  };
  sender.transactions.unshift(record);
  receiver.transactions.unshift(record);
  bank.transactions.unshift(record);
  filtered.push(sender, receiver);
  accounts.users = filtered;
  if (current.role === "client")
    localStorage.setItem("user", JSON.stringify(sender));
  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("bank", JSON.stringify(bank));
};

export const addExpense = (user, expense) => {
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const filtered = accounts.users.filter((account) => account.id !== user.id);
  user.expenses.unshift(expense);
  filtered.push(user);
  accounts.users = filtered;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accounts", JSON.stringify(accounts));
};

export const removeExpense = (user, item, setExpenseList, setExpenseTotal) => {
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  accounts.users = accounts.users.filter((account) => account.id !== user.id);
  const expenses = user.expenses.filter((expense) => expense.id !== item.id);
  setExpenseList(expenses);
  setExpenseTotal((state) => state - item.amount);
  user.expenses = expenses;
  accounts.users.push(user);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("user", JSON.stringify(user));
};
