

// <=========Source Course=========>
// https://www.codewars.com/kata/593c9175933500f33400003e

// <========= Title =========>
//Return the first M multiples of N

function multiples(m, n){let dd =[];let ff =0
  for(let i=1;i<=m;i++){ff+=n; dd.push(ff)}return dd
}
console.log(multiples(3, 5), [5, 10, 15]);
