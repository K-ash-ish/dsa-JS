function bitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; // O(1)
  //   n/2 in while loop O(log n)
}
console.log(bitwise(3));
