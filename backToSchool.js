// let str1 = "123456";
// let str2 = "312321";

let str1 = "123456"
let str2 = "123456"

let stringToArr = str1.split('');
let string2ToArr = str2.split('');
let arrayLength = stringToArr.length > string2ToArr.length ? stringToArr.length : string2ToArr.length;

let outputStrArr = []
    let reminder = 0;
    
for(let iter=arrayLength-1;iter>=0;iter--){
    let aVal = stringToArr[iter] ? stringToArr[iter] : 0;
    let bVal = string2ToArr[iter] ? string2ToArr[iter] : 0;
    let addedValue = parseInt(aVal)+parseInt(bVal)+reminder;
    let temp = addedValue.toString().split('');
    if(temp.length > 1){
        reminder = temp.slice(0,temp.length-1)
        reminder = parseInt(reminder)
    }
    else{
        reminder = 0;
    }
    temp = temp.slice(temp.length-1)
    outputStrArr.push(temp)
}
let revOutSringArry = []
for(let iter=outputStrArr.length-1;iter>=0;iter--){
    revOutSringArry.push(outputStrArr[iter])
}
console.log(revOutSringArry.join(''))
