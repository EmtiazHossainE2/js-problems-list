// বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 

// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
var myname = 'Emtiaz ';
let myAge = 22 ;
const myBirthday = '3rd October 2002' ;

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
for(let i = 50 ;  i <= 100 ; i++){
    console.log(i);
}

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

for( let i = 50 ; i<= 80 ; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

function addition (num1,num2,num3){
    let sum = num1 + num2 + num3 
    return sum ;
}
let num1 = 100 
let num2 = 200 
let num3 = 300
let result = addition(num1,num2,num3)
console.log(result);