//let cash = 20
//let price = 40
//let difference = cash - price
//if (cash > price){
//   console.log(`you paid extra, here's $${difference} change`)
//}
//else if (cash === price){
//    console.log("you paid the exact amount, have a nice day!")
//}
//else {
//    console.log(`not enough money, you still owe $${difference * -1}`)
//}



//let money = 90
//let cost = 50
//let isStoreOpen = true

//let str = (money >= cost) && isStoreOpen ? 'give receipt' : "don't give receipt"
//console.log(str)



//let count = 0
//while (count <= 100) {
//    console.log(count)
//    count = count + 1
//}


//THE FOLLOWING WHILE AND FOR STATEMENTS PRODUCE THE SAME RESULT: FOR IS MORE COMMON

//let count = 0
//while (count <= 5) {
//    console.log(count)
//    count++
//}


//for(let i = 0; i < 5; i++ ){
//   console.log(i)
//}



//for(let i = 1; i <= 20; ++i){
  // if (i % 3 === 0 && i % 5 === 0){
  //      console.log('Frontend Simplified')
  //      }   
  
  //else if (i % 3 === 0){
  //      console.log('Frontend')
  //  }
    
  //  else if (i % 5 === 0){
  //      console.log('Simplified')
  //      }
            
  //  else{
  //      console.log(i)
  //  }
//}



//function add(a,b){
//    return a + b;
//}
//console.log (add (3,4));



//function convertCelciusToFahrenheit(celcius){
//    return celcius * 1.8 + 32
//}
//console.log (convertCelciusToFahrenheit(30));

// THE ABOVE FUNCTION IS THE SAME AS THE FOLLOWING ARROW FUNCTION:

//const convertCelciusToFahrenheit = (celcius) => {
//    return celcius * 1.8 + 32
//}
//console.log (convertCelciusToFahrenheit(0));



//function multiply(a,b) {
//    return a * b
//}
//console.log(multiply(3,4));

//const multiply = (a,b) => {
//    return a*b
//}
//console.log(multiply(3,4));



//let grades = ['A+', 'A', 'FAIL']
//let goodGrades = grades.filter (element => element !== 'FAIL')
//console.log(goodGrades)


//let grades = ['A+', 'A', 'FAIL']
//let goodGrades = []
//for (let i = 0; i < grades.length; ++i) {
//    if (grades[i] !== 'FAIL') {
//        goodGrades.push(grades[i]);
//    }
//}
//console.log(goodGrades);


//let dollars = [1, 5, 10, 3]
//let cents = dollars.map(element => element * 100);
//console.log(cents);


//let dollars = [1, 5, 10, 3]
//let cents = []
//for (let i = 0; i < dollars.length; i++) {
//    cents.push(dollars[i] * 100)
//}
//console.log(cents);
  



//let users = [{
  //  username: 'Zen',
  //  email: 'Zen@frontendsimplified.com',
  //  password: 'Zen123',
  //  discordId: 'Zen#0001',
  //  subscriptionStatus: 'VIP',
  //  lessonsCompleted: [0, 1, 2, 3],
//}]

//function register(user){
//    users.push(user);
//}

    //let user = {
      //  username: username,
      //  email: email,
      //  password: password,
      //  discordId: discordId,
      //  subscriptionStatus: subscriptionStatus,
      //  lessonsCompleted: lessonsCompleted
    //}
    
//register({username:'David', email:'david@frontendsimplified.com', password:'david123', discordId:'david#0001', subscriptionStatus:'VIP', lessonsCompleted:[0, 1]});

//console.log(users);




//function getVideo(subscriptionStatus) {
//    return new Promise((resolve, reject) => {
//        if (subscriptionStatus === "VIP"){
//            resolve("show video")
//        }
//        else if (subscriptionStatus === "FREE"){    
//            resolve("show trailer")
//        }
//        else reject("no video")
//    } 
//)
//}

//async function main(){
//    console.log(await getVideo())
//}
//main();



//function hoursIntoSeconds(hour){
 //   return hour * 60 * 60;
//}
//console.log (hoursIntoSeconds(2));


//function calcPerimeter (length, width){
//    return 2 * (length + width);
//}
//console.log (calcPerimeter(6, 7));


//function calcAreaTriangle (base, height){
//    return .5 * base * height;
//}
//console.log (calcAreaTriangle(2, 3));


//function appendFrontend (string){
//    return string + 'Frontend';
//}
//c
// console.log (appendFrontend('Banana'));



function sumGreaterThanOneHundred (num1, num2){
    if (num1 + num2 > 100){
        return true;
    }
    else{
        return false;
    }
}
console.log (sumGreaterThanOneHundred(50, 60));

function sumGreaterThanOneHundred (num1, num2){
    return (num1 + num2 > 100);
}
console.log (sumGreaterThanOneHundred(50, 60));


function lessThanOrEqualToZero (num) {
    return num <= 0
}
console.log (lessThanOrEqualToZero(-5));


function oppositeBoolean (bool){
    if (bool === false) {
        return true;
    }
    return false;
}
console.log (oppositeBoolean(true));

function oppositeBoolean (bool){
    return !true;
}
console.log (oppositeBoolean(true));


function isNotNumberZero (num){
    return num !== 0;
}
console.log(isNotNumberZero(0));


function calcRemainder (num1, num2){
    return num1 % num2;
}
console.log (calcRemainder(7, 8));


function isOdd (num){
    return num !== 0;
}
console.log (isOdd(15));


function booleanInteger (num){
    if (num % 2 === 0){
    return 1;
    }
    return -1;
}
console.log (booleanInteger(5));

function booleanInteger (num){
    return num % 2 === 0 ? 1 : -1;
}
console.log (booleanInteger(5));


function isLoggedInAndSubscribed (loggedIn, subscribed){
    if (loggedIn === 'LOGGED_IN' &&  subscribed === 'SUBSCRIBED'){
        return true;
    }
    return false;
}
console.log (isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));


function isLoggedInAndSubscribed (loggedIn, subscribed){
    return (loggedIn === 'LOGGED_IN' &&  subscribed === 'SUBSCRIBED');
}
console.log (isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));


