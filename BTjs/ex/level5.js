//5.1. reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
function Rever(arr) {
    let newArr=[];
    arr.forEach((element )=> {
      newArr.unshift(element);
    });
    console.log(newArr);
  }
  Rever([1, 2, 3, 7, 8, 20]);
//5.2. chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.
function Chunk(arr,size) {
    let newArr=[];
    let result=[];
    let count=0;
    arr.forEach((element )=> {
        result.push(element);
        count++;
        if(count===size){
            newArr.push(result);
            result=[];
            count=0;
        }
        
    });
    if(result.length>0){
        newArr.push(result);
    }
    console.log(newArr);
  }
  Chunk(['a', 'b', 'c', 'd'], 2);
  Chunk(['a', 'b', 'c', 'd'], 3);
//5.3. uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
function Rever(arr) {
    let newArr=new Set();
    arr.forEach((element )=> {
      newArr.add(element);
    });
    console.log(Array.from(newArr));
  }
  Rever([1, 2, 3, 2, 4]);
//5.4. uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
function uniqArrayObject(arr) {
    let exist = new Set(); 
    let uniqueArr = []; 
    let a=[];
    arr.forEach(obj => {
        let sortedEntries = Object.entries(obj).sort(); 
        let objString = sortedEntries.map(entry => entry.join(":")).join("|");
        if (!exist.has(objString)) {
            exist.add(objString);
            uniqueArr.push(obj);
        }
    });
    return uniqueArr;
}

console.log(uniqArrayObject([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'y': 2, 'x': 1 }]));  
//5.5. Group by: Cho đầu vào là 1 collection ( array of object ), Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định

function groupBy(arr, key) {
    let grouped = {}; 

    arr.forEach(obj => {
        let groupKey = obj[key];
        if (!grouped[groupKey]) {
            grouped[groupKey] = []; 
        }
        grouped[groupKey].push(obj); 
    });

    return grouped;
}

const collect = [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }];
console.log(groupBy(collect, 'a'));
console.log(groupBy(collect, 'b'));

//5.6. TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.

function TrimAll(str) {
    let temp = str.trim().split(/\s+/); 
    let newStr = temp.join(' '); 
    
    console.log(newStr);
}

TrimAll('   hello     world   '); 
TrimAll('   I    am    good      '); 
TrimAll('   I am   am    good  good   '); 

//5.7. MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
function MapKey(keys, collections) {
    let result = collections.map(item => {
        let obj = {};
        for (let key of keys) {
            if (item[key] !== undefined) {  
                obj[key] = item[key];
            }
        }
        return obj;
    });
    console.log(result);
}
var keys = ['b','a','c'];
var collections = [{a: 1, b: 1, c: 2, d: 4, e: 5}, {a: 2, b:1, c: 5, d: 4, e: 5}, {d: 4, e: 5, a: 22, b:11, c: 51, }]

MapKey(keys,collections);

//5.8. Switch Order: Viết function để thay đổi thứ tự order của các object.
function switchOrder(arr,changedID,changedOder){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===changedID){
            arr[changedOder].order=arr[i].order;
            [arr[i],arr[changedOder]]=[arr[changedOder],arr[i]];
            arr[i].order=changedOder; 
        }
    }
    console.log(arr);
}
const arr = [{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
 switchOrder(arr,9, 1);
//5.9. SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
function SumAllValues(arr) {
    let result = arr.reduce((acc, obj) => {
        for (let key in obj) {
            acc[key] = (acc[key] || 0) + obj[key]; 
        }
        return acc;
    }); 

    console.log(result);
}

const Arr = [{a: 2, b: 10}, {a: 12, c: 11}, {a: 8, b: 14, d: 20}, {a: 8}]
SumAllValues(Arr);
//5.10. TemplateString:
const fs = require('fs');
const path = require('path');

function replaceParams(content, params) {
    return content.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return params[key] !== undefined ? params[key] : match;
    });
}

function processTemplate(inputFile, outputFile, params) {
    //Đọc nội dung file
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error(" Lỗi khi đọc file:", err);
            return;
        }

        const updatedContent = replaceParams(data, params);
        //Ghi nội dung file mới vào out put
        fs.writeFile(outputFile, updatedContent, 'utf8', (err) => {
            if (err) {
                console.error(" Lỗi khi ghi file:", err);
                return;
            }
            console.log(" File mới đã được tạo:", outputFile);
        });
    });
}

const inputPath = 'C:\\Users\\LENOVO\\Desktop\\BTjs\\ex\\TemplateString.txt'; // (Dùng đường dẫn tuyệt đối)
const outputPath = path.join(__dirname, 'output.txt'); // Đường dẫn file mới

const params = { name: 'Jonny' };
processTemplate(inputPath, outputPath, params);


const inputPath2 = 'C:\\Users\\LENOVO\\Desktop\\BTjs\\ex\\TemplateString.html'; // (Dùng đường dẫn tuyệt đối)
const outputPath2 = path.join(__dirname, 'output.html'); // Đường dẫn file mới
const params2 = { title: 'Search of skill', pageTitle: 'Home page', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consectetur' };
processTemplate(inputPath2, outputPath2, params2);