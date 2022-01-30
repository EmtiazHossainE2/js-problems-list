// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
function leapYear (year){
    if(year % 4 == 0 && year % 100 != 0){
        return true
    }
    return false
}
let year = 2023 ; 
let isLeapYear = leapYear(year); 
console.log(isLeapYear);
 

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

 function myAge (age){
    if(age % 2 == 0){
        return true
    }
    return false 
 }
 let age = 22 ; 
 console.log(myAge(age));

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।  

function hourToMinute (hour){
    let minute =  60 * hour ;
    return minute 
}
let hour = 24 ; 
let result = hourToMinute(hour)
console.log(result);