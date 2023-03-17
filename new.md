#new

-1
```
let fruits = ["apple", "banana", "orange"];
let arr = fruits.includes("orange");
console.log(arr);
```

-2
```
let number = [4, 8, 12, 14, 16];
let sum = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (i % 2 === 0) {
            sum = sum + number[i];
        }
    }
    return sum;
}

console.log(sum(number));
```

-3
```
function uniqe(array1, array2) {
  let a = array1.concat(array2);
  let b = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      b.push(a[i]);
    }
  }
  return b;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(uniqe(arr1, arr2)); 
```

-4
```
let arr = ["aslam", "khan", "jaipur", "wecodeacademy"];
console.log(long(arr))
function long(array) {
  let longest = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
```

-5
```
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
let arr = [1, 2, 3, 4, 5];
let average2 = average(arr);
console.log(average2); // Output: 3
console.log(arr);
```

-6
```
let a =[10,20,30,40,50]
let b =a.reduce
console.log(b)
```

-11
```
function five(numbers) {
  let filter = numbers.filter(function(num) {
    return num > 5;
  });
  return filter;
}
let arr = [1, 6, 2, 8, 9, 3, 4];
let filter = five(arr);
console.log(filter);
```

-15
```
let arr = ["apple", "cherry", "banana", "date"];
let i = sort(arr);
console.log(i); 
function sort(string) {
  string.sort((a, b) => a.length - b.length);
  return string;
}
```

