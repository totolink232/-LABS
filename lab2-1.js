// Перевірка, чи є число цілим
function isInteger(num) {
  return num % 1 === 0;
}

// Пошук простих чисел на інтервалі [a, b]
function findPrimes(a, b) {
  let primes = [];

  for (let i = Math.max(2, Math.ceil(a)); i <= b; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  console.log("Прості числа на інтервалі [" + a + ", " + b + "]:", primes);
  return primes;
}
