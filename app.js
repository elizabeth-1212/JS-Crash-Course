let cash = 20
let price = 40
let difference = cash - price
if (cash > price){
    console.log(`you paid extra, here's $${difference} change`)
}
else if (cash === price){
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money, you still owe $${difference * -1}`)
}



let money = 90
let cost = 50
let isStoreOpen = true

let str = (money >= cost) && isStoreOpen ? 'give receipt' : "don't give receipt"
console.log(str)