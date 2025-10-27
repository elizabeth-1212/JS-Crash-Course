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


//let str = "Frontend Simplified";
//for (let i = 0; i < str.length; ++i){
//    console.log(str[i]);
//}

function convertCelciusToFahrenheit(C){
    return C * 1.8 +32
}
console.log (convertCelciusToFahrenheit(0));


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


let grades = ['A+', 'A', 'FAIL']
let newGrades = grades.filter(element => element !== 'FAIL')
console.log(newGrades);

let dollars = [1, 2, 5]
let cents = dollars.map(elem => elem * 100)
console.log(cents);

let dollar = [1, 2, 5]
let cent = []
for (let i = 0; i < dollar.length; ++i){
    cent.push(dollar[i] * 100)
}
    console.log (cent);

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
  

console.log(document.querySelector('h1'));
console.log(document.getElementById('title'));

function changeTitleToRed() {
    document.querySelector('#title').style.color='red'
}


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


function addNum(num1,num2){
    return num1 + num2
}
console.log(addNum(2,3));

function hoursToSeconds(hours){
    return hours * 3600
}
console.log(hoursToSeconds(4));

function perimeter(length, width){
    return 2 * (length + width)
}
console.log(perimeter(6, 7));

function areaTriangle(base, height){
    return (base * height) / 2
}
console.log(areaTriangle(20, 20));

function addString(string){
    return string + "Frontend"
}
console.log(addString("Apple"));

function greaterThanOneHundred(num1, num2){
    return num1 + num2 > 100;
}
console.log(greaterThanOneHundred(45, 10));

function lessThanOrEqualToZero(num){
    return num <= 0;
}
console.log(lessThanOrEqualToZero(-8));

function oppBoolean(boolean){
    return !boolean;
}
console.log(oppBoolean(true));

function isNotZero(element){
    return element !== 0
}
console.log(isNotZero(5));

function calcRemainder(num1, num2){
    return num1 % num2;
}
console.log(calcRemainder(9, 8));

function isNumOdd(num1){
    return (num1 % 2 !== 0);
}
console.log(isNumOdd(6));

function booleanInteger(num){
    return num % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(25));

function isLoggedInAndSubscribed(str1, str2){
    return (str1 === 'LOGGED_IN') || (str2 === 'SUBSCRIBED');
}
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));



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



//BEGINNER QUESTIONS:

//function sumGreaterThanOneHundred (num1, num2){
//    if (num1 + num2 > 100){
//        return true;
//    }
//    else{
//        return false;
//    }
//}
//console.log (sumGreaterThanOneHundred(50, 60));

//function sumGreaterThanOneHundred (num1, num2){
//    return (num1 + num2 > 100);
//}
//console.log (sumGreaterThanOneHundred(50, 60));


//function lessThanOrEqualToZero (num) {
//    return num <= 0
//}
//console.log (lessThanOrEqualToZero(-5));


//function oppositeBoolean (bool){
//    if (bool === false) {
//        return true;
//    }
//    return false;
//}
//console.log (oppositeBoolean(true));

//function oppositeBoolean (bool){
//    return !true;
//}
//console.log (oppositeBoolean(true));


//function isNotNumberZero (num){
//    return num !== 0;
//}
//console.log(isNotNumberZero(0));


//function calcRemainder (num1, num2){
//    return num1 % num2;
//}
//console.log (calcRemainder(7, 8));


//function isOdd (num){
//    return num !== 0;
//}
//console.log (isOdd(15));


//function booleanInteger (num){
//    if (num % 2 === 0){
//    return 1;
//    }
//    return -1;
//}
//console.log (booleanInteger(5));

//function booleanInteger (num){
//    return num % 2 === 0 ? 1 : -1;
//}
//console.log (booleanInteger(5));


//function isLoggedInAndSubscribed (loggedIn, subscribed){
//    if (loggedIn === 'LOGGED_IN' &&  subscribed === 'SUBSCRIBED'){
//        return true;
//    }
//    return false;
//}
//console.log (isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));


//function isLoggedInAndSubscribed (loggedIn, subscribed){
//    return (loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED');
//}
//console.log (isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));


//function isLoggedInOrSubscribed (loggedIn, subscribed){
//     return (loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED');
//}
//console.log (isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));




 function falsyOrTruthy (elem1, elem2) {
     if (!elem1){
         return elem1;
     }
     else {
         return elem2;
     }
 }
console.log(falsyOrTruthy (0, 4));


function falsyOrTruthy (elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}
console.log(falsyOrTruthy (5, 10));


function arrLength (arr){
    return arr.length;
}
console.log (arrLength([1, 2, 3, 6]));


function lastElem (arr){
   return arr[arr.length - 1];
}
console.log (lastElem([1, 2, 3, 6]));


//MEMORIZE:  USED TO LOOP THRU EACH ELEMENT IN AN ARRAY
//function arrSum (arr){
//    for (let i = 0; i < arr.length; ++i){
//   console.log(arr[i]);
//    }
//    console.log('for loop broke');    
//}
//console.log(arrSum([1, 2, 3, 4, 5, 6]));


function arrSum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; ++i){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(arrSum([25, 50, 5]));



function progressiveSum (num){
    let sum = 0;
    for (let i = 0; i <= num; ++i){
        sum = sum + i;
    }
    return sum;
}
console.log(progressiveSum(5));



function calcTime(seconds){
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1){
        timerMinutes = '0' + timerMinutes;
    }
    return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(500));



function getMax(arr){
    let max = arr[0];
    for (i=1; i < arr.length; ++i){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([10, 65, 41]));



function reverseString(str){
    let reversedString = '';
    for (i = 0; i < str.length; ++i){
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}
console.log (reverseString('abc'));


function reverseString(str){
    return str.split('').reverse().join('');
}
console.log (reverseString('abc'));


function convertToZeros(arr){
    let newArray = [];
    for (i = 0; i < arr.length; ++i){
        newArray[i] = 0;
    }
    return newArray;
}
console.log(convertToZeros([1, 2, 3, 4]));


function convertToZeros(arr){
    return new Array(arr.length).fill(0);
}
console.log(convertToZeros([1, 2, 3, 4]));



function convertToZeros(arr){
    return arr.map(elem => 0);
}
console.log(convertToZeros([1, 5, 8]));



function removeApples (arr){
    let noApples = []
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] !== 'apple'){
            noApples.push(arr[i]);
        }
    }
    return noApples;
}
console.log(removeApples(['banana', 'apple', 'orange', 'apple']));


function removeApples (arr){
    return noApples = arr.filter(elem => elem !== 'apple');
}
console.log(removeApples(['banana', 'apple', 'orange', 'apple']));



function filterOutFalsy (arr){
    return arr.filter(elem => !!elem === true)
}
console.log(filterOutFalsy(['banana', 500, false, 0]));


function filterOutFalsy (arr){
    let truthyArr = [];
    for (i = 0; i < arr.length; ++i){
        if (!!arr[i] === true){
            truthyArr.push (arr[i]);
        }
    }
    return truthyArr;
}
console.log(filterOutFalsy(['banana', 500, false, 0]));


function convertToBoolean(arr){
    return arr.map(elem => !!elem)
}
console.log(convertToBoolean([0, 500, "dog", NaN, []]));


function showRating(rating){
    let ratings = "";
    for (let i = 0; i < rating; ++i){
        if (i === 3){
            ratings = ratings + "*";
        }
        else{
            ratings = ratings + "* ";
        }
    }
    return ratings;
}
console.log(showRating(5));


function showRating(rating){
    let ratings = "";
    for (let i = 0; i < rating; ++i){
        ratings = ratings + "*";
        if (i !== rating - 1){
            ratings = ratings + " ";
        }
    }
    return ratings;
}
console.log(showRating(5));


function showRating(rating){
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i){
        ratings += "*";
        if (i !== Math.floor(rating) - 1){
            ratings += " ";
        }
    }
    if(!Number.isInteger(rating)){
        ratings += " .";
    }
    return ratings;
}
console.log(showRating(3.5));



function sortLowToHigh(numbers){
    return numbers.sort((a, b) => a - b);
}
console.log(sortLowToHigh([5, 1, 10, 0, 4]));



function sortHighToLow(numbers){
    return numbers.sort((a, b) => b.price - a.price);
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 0},
    {id: 3, price: 500},
]));



async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json()   

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}
postsByUser(5);



async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json()

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);

    console.log(incompleteTasks);
    
}
firstSixIncomplete(6);