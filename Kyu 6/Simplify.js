

// <=========Source Course=========>
// https://www.codewars.com/kata/5800b6568f7ddad2c10000ae

// <========= Title =========>
// simpifly the number!

function simplify(num) {
  let str = num.toString()
  hasil = ''
  for(var i=0;i<str.length;i++) {
    if(str[i] ==0) {
      hasil += ''
      continue
    }
    if(10**(str.length-1-i) < 10) {
      break
    }
    if(str.length-i == 1) {
      hasil += str[i] + '*' + (10**(str.length-1-i)) 
    }else {
    hasil += str[i] + '*' + (10**(str.length-1-i)) +'+'
    }
  }
  hasil += str[str.length-1] == 0 ? '':str[str.length-1]
  if (hasil.endsWith('+')) {
  hasil = hasil.slice(0, -1)
}
  return hasil
  }






console.log(simplify(48053),'4*10000+8*1000+5*10+3')
console.log(simplify(8964631), "8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1"); 
    console.log(simplify(660), "6*100+6*10");
    console.log(simplify(56),"5*10+6");
    console.log(simplify(600), "6*100");

