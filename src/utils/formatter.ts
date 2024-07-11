function convertNumberToDollar(price: number) {
  const convertedPrice = String(price.toFixed(2)).replace('.', ',');

  return `$ ${convertedPrice}`;
}

export { convertNumberToDollar };
