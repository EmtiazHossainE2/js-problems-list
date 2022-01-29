//1.  প্রাকটিস চ্যালেঞ্জ -১: প্রাকটিস চ্যালেঞ্জ -১:  ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?  

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

//  প্রাকটিস চ্যালেঞ্জ -2:  তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 
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
