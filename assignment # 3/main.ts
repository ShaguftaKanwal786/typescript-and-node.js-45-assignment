// task#3 "name cases"
let myname = "shagufta kanwal"
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.replace(/\b\w/g, function (upc) { return upc.toUpperCase(); }));