

// <=========Source Course=========>
// https://www.codewars.com/kata/557dd2a061f099504a000088

// <========= Title =========>
// LinkedList -> Array
function listToArray(list) {
  let hasil =[]
  while(list !== null) {
    hasil.push(list.value)
    list = list.next
  }
  return hasil.flat()
}
const lists = [
    {value: 1, next: {value: 2, next: {value: 3, next: null}}},
    {value: "string", next: null},
    {value: true, next: {value: false, next: {value: "true", next: {value: "false", next: null}}}},
    {value: 1, next: {value: 1, next: {value: 1, next: {value: 1, next: {value: 1, next: {value: 1, next: null}}}}}}
    ];

        console.log(listToArray(lists[0]), [1, 2, 3]);
        console.log(listToArray(lists[1]), ["string"]);
        console.log(listToArray(lists[2]), [true, false, "true", "false"]);
        console.log(listToArray(lists[3]), [1, 1, 1, 1, 1, 1]);