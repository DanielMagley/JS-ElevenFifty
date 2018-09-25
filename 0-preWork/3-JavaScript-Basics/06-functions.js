function hello() {
    console.log("Hello World!");
}

hello();
hello();
hello();

function pacersWon() {
    console.log("Pacers Won!")
}

pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x){
    console.log("The number you entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum) {
    console.log(secondNum - firstNum)
}

subtractTwoNumbers(5, 7)

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);


