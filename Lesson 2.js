//  1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:


// function testFunction(...arguments) {
//     let numbers = 0;

//     for( let x of arguments ) {
//         if( x > 0 ){
//             numbers += x;
//         }
//     }
//     return numbers;

// }
// let sum = testFunction (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(sum);

// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:


// function sum (...y){

//     let x = 0;

//     for (let i of y){
//         x += i;
//     }
//     return x;

// }
// let functionSum = sum (10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(functionSum );

//3.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

// let user = {
//     firstName: 'giorgi',
//     lastName: 'saakadze',
//     age: 32,
//     isLoggedIn: true
// }

// function fullName(user) {
//     let name = user.firstName + ' ' + user.lastName
//     if(user.isLoggedIn = 1) {
//         console.log(name)

//     }
// }




//4.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:


function maxNumber(...x){
    let mNumber = 0;
    for (let i of x){
        if( i > mNumber){
            mNumber = i;
        }
    }
    return mNumber;
}

let max = maxNumber( 10, -2, 76, 324, 44, 34, 1000, 87, 3212)

console.log(max);