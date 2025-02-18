//1.1 Write a program that takes two numbers as inputs and displays their sum.
function Sum(a, b) {
    let sum = a + b;
    console.log("oke" + sum);
}
Sum(1,2);

//1.2 Write a program that takes a string as input and displays the length of the string.
function Lenth(a) {
    let lenth = a.length;
    console.log(lenth);
}
Lenth("helooo");

//1.3 Write a program that takes a number as input and displays its square. ( Tính bình phương )
function Sqr(a) {
    let Sq = Math.pow(a,2);
    console.log(Sq);
}
Sqr(4);

//1.4 Write a program that takes a list of numbers as input and displays the largest number in the list.
function LargestNnumber(a) {
    let b = a.sort();
    console.log(b[b.length-1]); 
}
LargestNnumber([3,1,2]);

//1.5 Write a program that takes a list of strings as input and displays the shortest string in the list.
function ShortestString(a) {
    let b=a[0];
    for(var i=1;i<=a.length-1;i++){
        if(b.length>a[i].length){
            b=a[i];
        }
    }
    console.log(b);
    
}
ShortestString(["anh","em","b"]);
 

//1.6 Write a program that takes a list of numbers as input and sorts the list in ascending order.

function Asc(a) {
    let b = a.sort();
    console.log(b); 
}
Asc([3,1,2]);
 
//1.7 Write a program that takes a list of strings as input and sorts the list in alphabetical order.

function AlphaOrder(a) {
    let b = a.sort();
    console.log(b); 
}
AlphaOrder(["Quoc","Khanh","Son"]);


//1.8 Write a program that takes a list of numbers as input and returns the median of the numbers.( Tìm số trung vị ( số trung vị không phải số trung bình cộng ))

function median(a) {
    let b = a.sort();
    let c=b[Math.floor(b.length/2)];
    let d=b[Math.floor(b.length/2 -1)];
    if(b.length%2==0){
        console.log((c+d)/2);
    }else console.log(c);
   
    
}
median([3,1,2,4]);

// 1.9 Write a program that takes a string as input and returns the number of words in the string. ( tìm số từ trong một chuỗi, VD: “Hello world" => 2 )

function NumWord(a) {
    let b = a.split(' ');
    console.log(b.length);
}
NumWord("He lo");

 //1.10 Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
 
function ContainA(a) {
    let b=[];
    for(var x of a){
        if(x.includes('a')){
            b.push(x);
        }
    }
    console.log(b.length);
}
ContainA(["He","Ha","oke"]);