export const countDecimals = (numberAsString: string) => {
  if (numberAsString.includes(".")) {
    return numberAsString.split(".")[1].length;
  }
  return 0;
};
