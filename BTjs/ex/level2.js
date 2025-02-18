//2.1 Write a program that takes a list of numbers as input and returns the second largest number in the list.

// function LargestNumber(a) {
//     let b = a.sort((c, d) => c - d);
//     console.log(b[b.length-2]); 
// }
// LargestNumber([70, 11, 20, 4, 100]);

//2.2 Write a program that takes a list of strings as input and returns the longest word in the list.

// function LongestWord(a) {
//     let count=" ";
//     for(var x of a){
//         if(x.length>count.length){
//             count=x;
//         }
//     }
//     console.log(count);
// }
// LongestWord(["oke","hello","bech"]);

//2.3 Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
// function MaxStr(str1, str2) {
//     function differentStr(str) {
//         let newStr = new Set(); // Initialize as a Set
    
//         for (let i = 0; i < str.length; i++) {
//             for (let j = i + 1; j <= str.length; j++) {
//                 newStr.add(str.slice(i, j)); // Add to Set
//             }
//         }
    
//         return Array.from(newStr); // Convert Set back to an array if needed
//     }
//     let arr1 = differentStr(str1)
//     let arr2 = differentStr(str2)

//     let cm = arr1.filter((subString) => arr2.includes(subString));

//     let max = cm[0]

//     for (let i = 0; i < cm.length; i++) {
//         if (cm[i].length > max.length) {
//             max = cm[i]
//         }
//     }

//     console.log(max)
// }
// MaxStr('abcdef', 'abczyzcdef');


//2.4 Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
// function divisible35(a){
//     let sum=0;
//     for(var x of a ){
//         if(x%3 == 0 && x%5 ==0){
//             sum+=x;
//         }
//     }
//     console.log(sum)
// }
// divisible35([1,3,5,15,8,9,30])

//2.5 Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
// function SumSubArr(a){
//     let b=0;
//     let c=0;
//     if(a.every(x=>x<0)){
//         let d=a.sort((e,f)=>e-f);
//         c=d[d.length-1];
//     }
//     else if(a.every(x=>x>0)){
//         for(var x of a ){
//             c=c+x;
//          }
//     }
//     else{
//         for(var x of a ){
//             b=b+x;
//             if(c<b) c=b;
//             if(b<0) b=0;
//          }
         
//     }
//     console.log(c)
// }
//SumSubArr([2,3,4,1,2,1,5,3]);=>positive
//SumSubArr([-2,-3,-4,-1,-2,-1,-5,-3]);=>negative
//SumSubArr([-2,-3,4,-1,-2,1,5,-3]);=>7
