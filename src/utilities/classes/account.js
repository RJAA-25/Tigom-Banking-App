export class Account {
  constructor(data) {
    const {
      firstName,
      lastName,
      email,
      password,
      birthdate,
      city,
      state,
      country,
    } = data;

    this.id = Math.round(Math.random() * 10_000_000_000);
    this.role = "client";
    this.balance = 0;
    this.transactions = [];
    this.expenses = [];

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
    this.address = {
      city: city,
      state: state,
      country: country,
    };
  }
}
