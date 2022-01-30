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

// Module 20 -5 Challenge 
// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  

function celsiusToFahrenheit (celsius){
    let fahrenheit = (9 / 5 ) * celsius + 32 ;
    return fahrenheit ;
}
let celsius = 22 ; 
let todayFahrenheit = celsiusToFahrenheit(celsius)
console.log(todayFahrenheit);

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function fahrenheitToCelsius (fahrenheit){
    let celsius = (5 / 9) * (fahrenheit - 32 )
    return celsius ;
}
let fahrenheit = 71.6 ;
let todayCelsius = fahrenheitToCelsius(fahrenheit)
console.log(todayCelsius);

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function yourMark (mark){
    if(mark >= 80 && mark <=100){
        let goodMark = 'Your result is A+';
        return goodMark
    } 
}
let mark = 81 ;
let result = yourMark(mark);
console.log(result);

// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

