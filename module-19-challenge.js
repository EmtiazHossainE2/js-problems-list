// 1. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  

function multiplication (number){
    for ( var i = 1 ; i <= 10 ; i++){
        console.log(number + ' * ' + i + ' = ' +  number * i) 
    }
} 
var namota = 13  ;
multiplication (namota) ;




// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।  

function lowerCase (){
    var text = " This is a Lowercase FUNCTION . Emtiaz Hossain Emon Solve THIS. " ;
    return text.toLowerCase() ;
}
console.log(lowerCase());


// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

function fullName (firstName ,lastName){
    var name = firstName + ' Hossain ' + lastName ; 
    return name ;
}
var firstName ='Emtiaz'
var lastName ='Emon'
console.log(fullName(firstName ,lastName)) ; 


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

function mySquare (square){
    var result = square * square ;
    return result ;
}
var square = 5 ;
console.log(mySquare(square));


/* ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

এবং pepperoni প্রিন্ট করবা। */ 

var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni',],
    crust: 'deep dish',
    serves: 2
}
console.log(pizza.toppings[2]);
// if(pizza.toppings.indexOf('pepperoni') != -1){
//     console.log('Pepperoni');
// }
// else {
//     console.log('Pepperoni is not here') ;
// }
