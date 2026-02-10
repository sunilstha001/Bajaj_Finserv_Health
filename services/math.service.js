exports.fibonacci = (n) => {
  if (n < 0) return [];
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
};

exports.primeFilter = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.filter(isPrime);
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcmTwo = (a, b) => (a * b) / gcd(a, b);

exports.lcm = (arr) => arr.reduce((a, b) => lcmTwo(a, b));
exports.hcf = (arr) => arr.reduce((a, b) => gcd(a, b));
