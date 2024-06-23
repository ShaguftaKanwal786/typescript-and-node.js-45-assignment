// =======================================Task # 16 ================================================
//adding guest starting of arry
let guest = ["Hamza", "Alishba", "Sohail", "Ayeza", "Rehman"];
let newguest = "Sufiyan";
guest.unshift(newguest);
console.log(guest);
//adding guest
//let middleIndex middle of arry
let middleIndex = guest.length / 2;
guest.splice(middleIndex, 0, "Habiba");
console.log(guest);
guest.forEach(items => console.log(`Dear! ${items}  Assalam o Alaikum\n We have arrange a big dinner table so you are invited for dinner tomorrow at 9.pm sharp\n Thank You`));
//======================================================================================================================
//================================== Task # 17 ================================================
while (guest.length > 2) {
    let removeguest = guest.pop();
    console.log(`sorry! ${removeguest} we cant invite for thr dinner today`);
}
;
guest.forEach(items => console.log(`Hello ${items} You are lucky that you are still invited for the dinner`));
//remove last two remaining guest also
guest.pop();
guest.pop();
//========================================================================================================================
//======================================Task # 18 ==========================================================
//orignal order
let countries = ["Canada", " Africa", "Brazil", "Denmark", "Egypt"];
console.log("orignal order", countries);
//alphabetic order,,
console.log("Alphabetic Order", [...countries].sort());
//still in orignal order
console.log("still in orignal order", countries);
//reverse order
console.log("Reverse order", [...countries].reverse());
//still in orignal order
console.log(" in orignal order", countries),
    //orignal array reversed
    console.log("orignal array reversed", countries.reverse());
//back to orignal order
console.log("back to orignal order", countries.reverse());
//sort in alphabetical order
console.log("Alphabetical order", countries.sort());
//orignal Array reverse again
console.log("Orignal order reverse again", countries.reverse());
//=================================================================================================================
// ==============================================task # 19 ====================================================
//invite guest and send them message one by one
let guest2 = ["Hamza", "Alishba", "Sohail", "Ayeza", "Rehman"];
guest2.forEach(items => console.log(`salam ${items},would you like to have a dinner with us`));
let guestlenght = guest2.length;
console.log(`we are inviting total ${guestlenght} for dinner`);
//===============================================================================================================
// =============================================task # 20 ======================================================
//making a programing language array
let programming = ["Typescript", "Python", "Javascript", "C++", "GW Basib", "GitHub"];
console.log("list of programming language");
programming.forEach(items => console.log(items));
let itcourse = {
    courseName: "Typescript & Javascript",
    Location: "Governor house",
    Onsitestudent: 50000,
    sir: "Sir Faisal",
    GovernorSindh: "Kamran Tessori",
};
console.log(itcourse);
export {};
//====================================================================================================================
