

// <=========Source Course=========>
// https://www.codewars.com/kata/5a434a9dc5e284724f000011

// <========= Title =========>
// The most Common Letter 

function replaceCommon(word,letter) {
  let dd = word
  word = word.toLowerCase().split(' ').join('')
  let obj ={}
  for(var i=0;i<word.length;i++) {
    if(!obj[word[i]]) {
      obj[word[i]] = 1
    }else {
      obj[word[i]] += 1
    }
  }
  let asli = Object.entries(obj)
  let max = ''
  let ss = Math.max(...Object.values(obj))
  for(var i=0;i<asli.length;i++) {
    if(asli[i][1] == ss ) {
      max += asli[i][0]
      break;
    }
  }
  return dd.replaceAll(max,letter)
}

console.log(replaceCommon('my mom loves me as never did', 't'), 'ty tot loves te as never did');
    console.log(replaceCommon('real talk bro', 'n'), 'neal talk bno');
    console.log(replaceCommon('great job go ahead', 'k'), 'grekt job go khekd');
    console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p'), 'yyyppp twwww ttt uuu cccp');
  
