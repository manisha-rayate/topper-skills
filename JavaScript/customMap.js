// program to print double of each array element.

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function map(fun) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let val = fun(arr[i], i, arr);
    newArr.push(val);
  }
  return newArr;
}

let arr2 = map(function(value, index, arr) {
  return value * 2;
});

console.log(arr2);
