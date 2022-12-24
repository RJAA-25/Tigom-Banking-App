import { Account } from "./classes/account";

export const initializeApp = () => {
  if (!localStorage.getItem("accounts")) {
    const admin = {
      role: "admin",
      username: "tigomBankAdmin",
      email: "admin@tigom.com.ph",
      password: "tigomAdmin2022",
    };
    const accounts = [admin];
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
  accounts.push(account);
  localStorage.setItem("user", JSON.stringify(account));
  localStorage.setItem("accounts", JSON.stringify(accounts));
  return account;
};

export const loginAccount = (data) => {
  const { identity, password } = data;
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const account = accounts.find(
    (account) => account.username === identity || account.email === identity
  );
  if (account?.password === password) {
    localStorage.setItem("user", JSON.stringify(account));
    return account;
  } else return "";
};
