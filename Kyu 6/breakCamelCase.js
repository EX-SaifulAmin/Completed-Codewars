

// <=========Source Course=========>
// https://www.codewars.com/kata/5208f99aee097e6552000148

// <========= Title =========>
// break Camel Case

function solution(str) {
  let hasil = ''
  for(var i=0;i<str.length;i++) {
    if(str[i] == str[i].toUpperCase()) {
      hasil += ' ' + str[i]
    }else {
      hasil += str[i]
    }
  }
    return hasil
}


    console.log(solution(""), "");
    console.log(solution("camelCasing"), "camel Casing");
    console.log(solution("camelCasingTest"), "camel Casing Test");