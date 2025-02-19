//4.1 Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
function BubbleSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          count++;  
        }
      }
    }
    return count;  
  }
  const arrr = [3, 1, 4, 2, 6, 5];
  console.log(BubbleSort(arrr));  
//4.2 Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
function findSubsets(nums, index) {
    let result = [[]];
   
    for (let num of nums) {
        let newSubsets = []
        for (let subset of result) {
            newSubsets.push([...subset, num])
        }
        result = result.concat(newSubsets)
    }
    var a=[]
    const sums = result.map(subset => {
        let sum = 0;
        for (let j = 0; j < subset.length; j++) {
            sum += subset[j];
        }
        a.push(sum)
    });

    var SUM = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] == index) {
            SUM++
        }
    }
    console.log(SUM);
}
 findSubsets([1, 1, 2, 3, 4], 5);

//4.3. Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.

function LongSub(arr) {
    let a = new Set();
    let b=arr.join('');
    let count=0; 
    let countSub=0;
    for(var x of b){
        a.add(x);
    }
    let c= Array.from(a);
    for(var d of c){
        for(let i=0;i<arr.length;i++){
            let str=arr[i];
            if(arr[i].includes(d)){
                count++;
            }
        }
        if(count===arr.length){
            countSub++;
        }
        count=0;
    }
    return  countSub;
  }
  //const ar = ["abcdefg", "abcde", "abcdef", "ab", "abc"];
  const arr = ["abcd", "ab", "abcd", "ab", "abcd"];

  console.log(LongSub(arr));  
//4.6. Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list.
function MaxPro(nums) {
    let result = [[]];
   
    for (let num of nums) {
        let newSubsets = []
        for (let subset of result) {
            newSubsets.push([...subset, num])
        }
        result = result.concat(newSubsets)
    }
    var a=[]
    const filterResult=result.filter((b)=>b.length==3);
    const sums = filterResult.map(subset => {
        let multi = 1;
        for (let j = 0; j < subset.length; j++) {
            multi =multi* subset[j];
        }
        a.push(multi)
    });

    a=a.sort((x,y)=>x-y);
    console.log(a[a.length-1]);
}
MaxPro([-10, -5, 0, 1, 2, 3, 4] );
//4.7. Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.

function LongStr(arr) {
    let wordCounts = [];

   
    arr.forEach(function(element) {
        const wordCount = element.length;
        wordCounts.push({ str: element, count: wordCount }); 
    });

    wordCounts.sort(function(a, b) {
        return b.count - a.count;
    });

    let newArr = [];
    wordCounts.forEach(function(item) {
        newArr.push(item.str); 
    });
    console.log(newArr); 
}
const ar = ['the quick brown fox', 'the lazy dog jumps over the fence', 'the cat in the hat'];
LongStr(ar);


//4.9. Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1. ( Khuyến khích dùng reduce )
//Không dùng reduce
// function longestIncreasingSubsequence(arr) {
//   let maxLen = 1;  
//   let currentLen = 1;

//   for (let i = 1; i < arr.length; i++) {
//       if (Math.abs(arr[i] - arr[i - 1]) === 1) { 
//           currentLen++;  
//       } else {
//           maxLen = Math.max(maxLen, currentLen); 
//           currentLen = 1; 
//       }
//   }

//   maxLen = Math.max(maxLen, currentLen);

//   return maxLen;
// }
// console.log(longestIncreasingSubsequence([1, 2, 3, 8, 6, 3])); // Output: 3
// console.log(longestIncreasingSubsequence([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])); // Output: 6

//Dùng reduce
function longestIncreasingSubsequence(arr) {
  if (arr.length === 0) return 0; 

  let maxLen = 0;
  let currentLen = 1;  
  let lastNum = arr[0]; 

    arr.reduce((_, num) => {
        if (num - lastNum === 1) {  
            currentLen++;
        } else {
            maxLen = Math.max(maxLen, currentLen);
            currentLen = 1; 
        }
        lastNum = num;
    }, 0);

  return Math.max(maxLen, currentLen);
}


console.log(longestIncreasingSubsequence([1, 2, 3, 8, 6, 3])); // Output: 3
console.log(longestIncreasingSubsequence([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])); // Output: 6



//4.10. Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function). 
function TwoStr(str, k) {

  function countCommonChars(str1, str2) {
     function differentStr(str) {
      let newStr = new Set(); // Initialize as a Set
  
      for (let i = 0; i < str.length; i++) {
          for (let j = i + 1; j <= str.length; j++) {
              newStr.add(str.slice(i, j)); // Add to Set
          }
      }
  
      return Array.from(newStr); // Convert Set back to an array if needed
  }
    let arr1 = differentStr(str1)
    let arr2 = differentStr(str2)

    let cm = arr1.filter((subString) => arr2.includes(subString));
    return cm.length;
    
  }
  let maxOverlap = 0;
  let result

  // So sánh từng cặp chuỗi
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
          let overlapCount = countCommonChars(str[i], str[j]);
          if (overlapCount > maxOverlap) {
              maxOverlap = overlapCount
              result = [str[i], str[j]]
          }
      }

  }
  if (maxOverlap >= k) {
      console.log(result)
  }
  else {
      console.log("Not exist")
  }
}
 TwoStr(["hello", "world", "foobar", "barfoo", "he", "llo"], 10)