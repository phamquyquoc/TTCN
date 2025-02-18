//3.1. Write a program that takes a list of numbers as input and returns the second smallest number in the list.
// function SecondSm(a) {
//     let b = a.sort((c, d) => c - d);
//     console.log(b[1]); 
// }
// SecondSm([70, 11, 20, 4, 100]);
//3.2. Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
// function MaxDiff(a) {
//     let b = a.sort((c, d) => c - d);
//     let sum = b[b.length-1] -b[0];
//     console.log(sum);
// }
// MaxDiff([1, 2, 91, 9, 100]);
//3.3.Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
// function LongSubsequence(a) {
//     let newArr=[];

//    for(let i=0;i<a.length-1;i++){
//     newArr[i]=[a[i]];


//     for(let j=i+1;j<a.length;j++){
//         if(a[i]<a[j] && a[j]>a[j-1]){
//             newArr[i].push(a[j]);
//         }
//     }
//    }
//    let result=[];
//    for(let i=0;i<newArr.length;i++){
//         if(newArr[i].length>result.length){
//             result=newArr[i];
//         }
//    }
//    console.log (result.length);


// }
// LongSubsequence([3, 10, 2, 1, 20]);
// LongSubsequence([50, 3, 10, 7, 40, 80 ]);

//3.4. Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
// function OverlapCount(st1, st2) {
//     let arr1 = st1.split("");
//     let arr2 = st2.split("");
  
//     let Count = arr1.filter((char) => arr2.includes(char));
//     return Count.length;
//   }
//   function looc(arr) {
//     let n = arr.length;
//     let maxCount = 0;
//     let result = [];
  
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
//         let Count = OverlapCount(arr[i], arr[j]);
//         if (Count > maxCount) {
//             maxCount = Count;
//           result = [arr[i], arr[j]];
//         }
//       }
//     }
//     return result;
//   }
//  console.log(looc(["hello", "world", "foobar", "barfoo", "he", "llo", "foobars", "abc", "cba"])) 
//3.5.Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
// function SPT(a) {
//    a=a.sort((c,b)=>c-b);
//    let sum=1;
//    for(let x of a){
//     if(x>sum){
//       break;
//     }
//     sum+=x;
//    }
//     console.log(sum);
// }
// SPT([1, 2, 3, 7, 8, 20]);
//3.6.Write a program that takes two lists of integers as input and returns the median of the combined list.
// function median(a,b) {
//   let c =a.concat(b);
//   let d = c.sort();
//   let e=d[Math.floor(d.length/2)];
//   let f=d[Math.floor(d.length/2 -1)];
//   if(d.length%2==0){
//       console.log((e+f)/2);
//   }else console.log(e);
 
// }
// median([3,1,2,4],[5,8,7,6]);
//3.10.Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first.

// function sortByLength(arr) {
//   for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i].length>arr[j].length){
//           [arr[i],arr[j]]=[arr[j],arr[i]];
//       }
//     }
//   }
//   return arr;
// }

// const words = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];
// console.log(sortByLength(words));