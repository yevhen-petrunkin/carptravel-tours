function getCurrentNumber(number: number): string {
  return number < 9 ? `0${number + 1}` : `${number + 1}`;
}

export default getCurrentNumber;
