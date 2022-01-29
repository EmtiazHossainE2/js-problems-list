// 1. ৩ টা নাম্বার থেকে বড় নাম্বার খুঁজে বের করবেন।  

function largestNumber (num1 ,num2 ,num3 ){
    if(num1 > num2 && num1 > num3){
        console.log('Largest number is ' + num1);
    }
    else if ( num2 > num1 && num2 > num3){
        console.log('Largest number is ' + num2);
    }
    else {
        console.log('Largest number is ' + num3);
    }
    return ;
}
var num1 = 10 
var num2 = 20 
var num3 = 14 
largestNumber(num1 , num2 ,num3 ) 
