// =========================================== task # 22 =====================================================
let errorArray = ["A", "B", "C", "D"];
console.log(errorArray[5]);
console.log(errorArray[1]);
//===========================================================================================================
// ============================================== task # 23 =================================================
// compare greater than less than , equal to numbers
let five = 5;
let ten = 10;
console.log(10 > 5);
console.log(5 < 10);
console.log(100 > 10);
console.log(8 == 8);
console.log(five != 10);
console.log(ten == 1);
console.log(9 > 100);
console.log(ten < 4);
console.log(1000 == ten);
console.log(5 > 6);
//=============================================================================================================
// ================================================== Task # 24 ===============================================
let apple = "apple";
let uppercaseapple = "APPLE";
let ten1 = 10;
let twenty = 20;
//test for equality and inequality of springs
console.log("is apple is equal to apple?");
console.log(apple == apple);
console.log("is apple is not equal to apple");
console.log(apple != apple);
//using lowercase function
console.log("is apple is equal to apple after converting to lowercase");
console.log(uppercaseapple.toLowerCase() == apple);
console.log(uppercaseapple == apple);
//numerical test
console.log("is ten is equal to twenty");
console.log(ten == twenty);
console.log(ten != twenty);
console.log(ten > 0);
console.log(twenty < 10);
console.log(ten == 10);
console.log(10 >= 5);
console.log(twenty <= 10);
//"and" or "or" condition
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30 ");
console.log(twenty > 30 && twenty != 10);
console.log("\n twenty is greater than 50 or twenty is equal to 20");
console.log(twenty > 50 || 20 == 20);
console.log("\n twenty is greater than 10 or twenty is not equal to 20");
console.log(twenty > 50 || 20 != 20);
//===============================================================================================================
// ================================================== Task #  25 =================================================
let aliencolor = "green";
if (aliencolor === "white") {
    console.log("you just earn 5 points");
}
;
if (aliencolor === "green") {
    console.log(" no output here");
}
;
//=================================================================================================================
//Task # 26
let aliencolor2 = "black";
if (aliencolor2 == "black") {
    console.log("you earn 5 points");
}
else {
    console.log("you just earn 10 points");
}
;
if (aliencolor2 == "red") {
    console.log("im from if statement");
}
else {
    console.log("im from else statement");
}
;
//==========================Task # 28====================== (define ages)...2,4,13,20,65 older
let age = 4;
if (age < 2) {
    console.log("the persin is a boy");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is a older");
}
;
//=========================================================================================================
// =========================================== Task # 29 (making fruit Array using "INCLUDE" method) ===================================================
let favfruit = ["Apple", " Mango", "Orange"];
if (favfruit.includes("Apple")) {
    console.log("you really like banana");
}
else if (favfruit.includes("Mango")) {
    console.log("you really like banana");
}
else if (favfruit.includes("Orange")) {
    console.log("you really like banana");
}
else if (favfruit.includes("strawberry")) {
    console.log("no match fruit");
}
else if (favfruit.includes("peach")) {
    console.log("no match fruit");
}
;
export {};
