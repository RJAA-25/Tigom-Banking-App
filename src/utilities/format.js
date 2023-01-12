export const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
};

export const formatID = (ID) => {
  const arr = String(ID).split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 4 || i === 9) {
      arr.splice(i, 0, " ");
    }
  }
  return arr.join("");
};
