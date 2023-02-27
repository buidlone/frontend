const countDecimals = (numberAsString: string) => {
  if (numberAsString.includes(".")) {
    return numberAsString.split(".")[1].length;
  }
  return 0;
};

export const roundApprox = (numberAsString: string) => {
  let roundedValue = "0";

  Number(numberAsString) >= 0.0001 && countDecimals(numberAsString) <= 4
    ? (roundedValue = numberAsString)
    : Number(numberAsString) >= 0.0001 && countDecimals(numberAsString) > 4
    ? (roundedValue = `≈ ${Number(numberAsString).toFixed(4)}`)
    : Number(numberAsString) < 0.0001 && Number(numberAsString) > 0
    ? (roundedValue = "≈ 0.0001")
    : (roundedValue = "0.0000");

  return roundedValue;
};

export const roundPrecise = (numberAsString: string) => {
  let roundedValue = "0";

  Number(numberAsString) >= 0.0001 && countDecimals(numberAsString) <= 4
    ? (roundedValue = numberAsString)
    : Number(numberAsString) >= 0.0001 && countDecimals(numberAsString) > 4
    ? (roundedValue = `${Number(numberAsString).toFixed(4)}`)
    : Number(numberAsString) < 0.0001 && Number(numberAsString) > 0
    ? (roundedValue = "< 0.0001")
    : (roundedValue = "0.0");

  return roundedValue;
};
