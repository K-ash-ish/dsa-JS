// function fibonacci(n) {
//   let first = 0,
//     second = 1;
//   let series = [0, 1];
//   for (let i = 0; i < n - 2; i++) {
//     series.push(first + second);
//     first = second;
//     second = series[series.length - 1];
//   }
//   return series;
// }
function fibonacci(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}
console.log(fibonacci(7));
