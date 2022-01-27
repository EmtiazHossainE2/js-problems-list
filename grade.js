//  প্রাকটিস চ্যালেঞ্জ -১:  

var result = 95 ;
if(result < 50 && result >= 0 ){
    console.log('Your friend grade is F');
}   else if ( result >= 50 && result < 60){
        console.log('Your friend grade is D');
    }
    else if( result >= 60 && result < 70){
        console.log('Your friend grade is C');
    }
    else if( result >= 70 && result < 80){
        console.log('Your friend grade is B');
    }
    else if( result >= 80 && result < 90){
        console.log('Your friend grade is A');
    }
    else if( result >= 90 && result <= 100){
        console.log('Your friend grade is A+');
    }
else{
    console.log('Result not found ');
}

//  প্রাকটিস চ্যালেঞ্জ -2: 
// var trafficDanger = 'Red';
// var trafficMiddle = 'Yellow';
// var trafficNormal = 'Green'; 
// var trafficSignal = trafficNormal ;

// if( trafficSignal == trafficDanger){
//     console.log('If I go it will be danger');
// } else if( trafficSignal == trafficMiddle){
//     console.log('I have to wait ')
// } else if(trafficSignal == trafficNormal){
//     console.log('I have to cross the road .')
// }else{
//     console.log('Gumao giya');
// }

var signal = 'yellow' ; 
if(signal === 'red'){
    console.log('If I go it will be danger');
} else if( signal === 'yellow'){
    console.log('I have to wait ');
} else {
    console.log('Now I can go ') ;
}
