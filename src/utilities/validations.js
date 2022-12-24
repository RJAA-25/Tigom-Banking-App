const accounts = JSON.parse(localStorage.getItem("Accounts")) || [];

export const checkFirstName = (value) => {
  return value.trim().length === 0 ? "First name is required" : "";
};

export const checkLastName = (value) => {
  return value.trim().length === 0 ? "Last name is required" : "";
};

export const checkUsername = (value) => {
  if (value.trim().length === 0) return "Username is required";
  if (value.trim().length < 4) return "Username must be at least 4 characters";
  // const accounts = JSON.parse(localStorage.getItem("Accounts")) || [];
  const usernames = accounts.map((account) => account.username);
  return usernames.includes(value.trim()) ? "Username already taken" : "";
};

export const checkPassword = (value, confirmation = "") => {
  if (value.length === 0) return "Password is required";
  if (value.length < 6) return "Password must be at least 6 characters";
  return confirmation && value !== confirmation
    ? "Confirmation password does not match"
    : "";
};

export const checkEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (value.length === 0) return "Email is required";
  if (!regex.test(value)) return "Email format is invalid";
  // const accounts = JSON.parse(localStorage.getItem("Accounts")) || [];
  const emails = accounts.map((account) => account.email);
  return emails.includes(value) ? "Email already linked to an account" : "";
};

export const checkAge = (value) => {
  const regex = /\d{4}-(0\d|1[0-2])-(0\d|[12]\d|3[01])/;
  if (!regex.test(value)) return "Birthdate format is invalid";
  const today = new Date();
  const birthdate = new Date(value);
  const age = (today - birthdate) / (1000 * 60 * 60 * 24 * 365);
  return age < 18 ? "Must be at least 18 years old" : "";
};

export const checkAddress = (value) => {
  return value.trim().length === 0 ? "This address field is required" : "";
};

export const checkDeposit = (value) => {
  return Number(value) < 1 ? "Minimum allowed deposit is ₱1.00" : "";
};

export const checkWithdrawal = (value, balance) => {
  if (Number(value) < 1) return "Minimum allowed withdrawal is ₱1.00";
  return Number(value) > Number(balance) ? "You have insufficient funds" : "";
};

export const checkTransfer = (value, balance) => {
  if (Number(value) < 1) return "Minimum allowed transfer is ₱1.00";
  return Number(value) > Number(balance) ? "You have insufficient funds" : "";
};
