function formatMoneyUSD(amount: number | string) {

  const formattedAmount = Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedAmountWithSpace = formattedAmount.replace("$", "$ ");

  return formattedAmountWithSpace;
}

export default formatMoneyUSD;
