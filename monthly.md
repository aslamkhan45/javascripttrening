# MONTHLY TEST....

### 1
```
let str = "aslamkhan"
let check = str.indexOf("khan") === 4
if (check) {
    strs = str.slice(0, 4) + str.slice(8)
    console.log(strs);
} else {
    console.log(str);
}
```

### 2
```
 function capital(i) 
 {
     i = i.split(" ");

     for (let a = 0, x = i.length; a < x; a++) {
         i[a] = i[a][0].toUpperCase() + i[a].substr(1);
     }
     return i.join(" ");
 }
 console.log(capital("aslam khan from jaipur"));
```

### 4
```
 function unique(str1) {
     var str = str1;
     var uniq = "";
     for (var a = 0; a < str.length; a++) {
         if (uniq.indexOf(str.charAt(a)) == -1) {
             uniq += str[a];
         }
     }
     return uniq;
 }
 console.log(unique("aslam khan from jaipur"))
```

### 10
```
 for (let i = 1; i <= 5; i++) {
   for (let a = 1; a <= 5; a++) {
     if (a >= i) {
       document.write(a + " ");
     } else {
       document.write(" ");
     }
   }
   document.write("<br>");
 }
 ```

### 3
```
 let sam = 222233222222
 let sum = sam.toString().split("")
 for (let a = 0; a < sum.length; a++) {
     for (let b = 0; b < sum.length; b++) {
         if (sum[a] !== sum[b]) {
             console.log("false");
         } else {
             console.log("true");
         }
     }
 }
 ```

### 9
```
 const arr0 = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
 const arr1 = arr0.flatMap((arr) => arr[0] + arr[1]);
 console.log(arr1);
 ```

### 6
```
string_chop = function (str, size) {
    if (str == null) return [];
    str = String(str);
    size = size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('rustam'));
console.log(string_chop('rustam', 1));
console.log(string_chop('rustam', 2));
console.log(string_chop('rustam', 3));
```