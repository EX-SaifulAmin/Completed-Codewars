

// <=========Source Course=========>
// https://www.codewars.com/kata/592eaf848c91f248ca000012

// <========= Title =========>
// Adding Word Part 1
class Arith {
  constructor(angka) {
    this.angka1 = angka
    }
    add(angka5) {
    let stringArr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty']
    for(let i=0;i<stringArr.length;i++) {
      if(this.angka1 == stringArr[i]) {
        this.angka1 = i
      }if(angka5 == stringArr[i]) {
        angka5 = i
      }if(!isNaN(this.angka1)&& !isNaN(angka5)) {
        return stringArr[this.angka1 + angka5]
      }
    }
  }
}

let i = new Arith("three");
console.log(i.add("seven"), "ten");
    console.log(i.add("eight"), "eleven");
    console.log(i.add("zero"), "three");