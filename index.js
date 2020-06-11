function isPrime(n, k=100) {
  if (n === 2) {
    return true;
  }
  if (n > 2 && n % 2 === 0) {
    return false;
  }
  if (n === 2 || n === 3) { return true }

  const smallPrimes = [2, 3, 5, 7, 11, 13, 17]

  const res = smallPrimes.map(x => n % x === 0).filter(x => x).includes(true)
  if (res) return false

  if (
    n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0 || n < 2) {
    return false
  }
  var d = n - 1;
  var s = 0;
  var t = 0;
  while(t === 0) {
    d = d / 2;
    t = d % 2;
    s++;
  }

  while (k--) {
    var a = Math.pow(Math.ceil(Math.random() * (n-2)) + 2, s);
    if (a % n === 1) continue; 
    var maybecomposed = false;
    for (var r=1;r<=s;r++) {
      a = (Math.pow(a, 2) % n);
      if (a === n-1) {
        maybecomposed = true;
        break;
      }
    }
    if (maybecomposed) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(3103134));
