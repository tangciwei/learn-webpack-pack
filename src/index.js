export default function add(a, b) {
  const low = a.length < b.length ? a : b;
  const big = a.length >= b.length ? a : b;
  let last = 0;
  let result = "";
  let i = low.length - 1;
  let j = big.length - 1;
  while (i >= 0) {
    const sum = Number(low[i]) + Number(big[j]) + last;
    result = (sum >= 10 ? sum - 10 : sum) + result;
    sum >= 10 ? (last = 1) : (last = 0);
    i--;
    j--;
  }
  while (j >= 0) {
    const sum = Number(big[j]) + last;
    result = (sum >= 10 ? sum - 10 : sum) + result;
    sum >= 10 ? (last = 1) : (last = 0);
    j--;
  }
  if (last === 1) {
    result = "1" + result;
  }
  return result;
}
