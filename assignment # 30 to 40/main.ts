//task # 30
''
let users: string,any = ["Ali", "Hamza","Haseeb","Shagufta","Admin"];
//for (let user of users)

if (users = "Admin"){
 console.log(` hello admin would you like to see the status report?`)
} else {
 console.log(`hello ${users} Thank you for loading our website`);
};
 

// ============================================== task # 31 ===========================================================

let userName =["Ali", "Hamza","Haseeb","Shagufta","Admin"];

if (userName.length > 0){
console.log( userName);

 }else {
console.log("we need to find some user");
   
}
 userName = []
  if (userName.length > 0){
 console.log( userName)
} 
else{
 console.log("we need to find some user");
};
//============================================================================================================

//t ===================================== task # 32 ==========================================================

let current_userName=["Shagufta","Ali","Hamza","aliya","Ehtisham"]
let new_user =["Aliya","Hafsa","Ali","Sufiyan","Ayeza"];

 new_user.forEach(user=>{
let ourCondition = current_userName.some(current_user =>current_user.toLowerCase()===user.toLowerCase());
if (ourCondition) {
console.log(`sorry  ${user} name is already taken`);
} else {
console.log(`this user name ${user} is available`);
}});
//==============================================================================================================

//================================================= task # 33 ==================================================

//(using foor loop


let numbers= [1,2,3,4,5,6,7,8,9];

for (let oneNumber of numbers){
let ordinalEnding: string;

if (oneNumber === 1){
     ordinalEnding ="st"
}
else  if (oneNumber=== 2){
ordinalEnding="nd"
}else if (oneNumber === 3){
ordinalEnding="rd"
   
 } else{
 ordinalEnding ="th"
     
}
console.log(`${oneNumber}${ordinalEnding}`);
   
};
 // =======================================================================================================================

// ================================================== task # 34 ===========================================================

let pizza= ["Fajita","chicken Tikka","MalaiCheese"]
for(let onepizza of pizza){
 console.log(`I Like ${onepizza}  pizza`);
};

console.log("pizza is love");
console.log("I eat pizza");
//===========================================================================================================================

// ================================================= task  # 35 ============================================================

let Animals = ["cow", "goat","sheep"]

for(let oneAnimal of Animals){
console.log(`${oneAnimal} give milk to us and it would make a great pet`);
 
}

console.log("These Animals are also use for sacrifice in ZIL HAJJ");
//============================================================================================================================

// ================================================= task # 36 ===============================================================

 function makeshirt(size :string ,message :string){
 console.log(`you selected: "${size} "size with print: "   ${message} "on shirt`);

}
makeshirt("medium" , "Kamran Tessori");
makeshirt("large", "IT course");



// ================================================ task3 37 =================================================

function makesshirt (size:string =" Large ",message : string = "I Love TypeScript"){
console.log(`creating a " ${size}" shirt with print message " ${message} " on shirt`);
 
}
makesshirt();
makesshirt("medium");
makesshirt ("small");
makesshirt("X Large", "I Love JavaScript");
//==============================================================================================================

//=================================================== task # 38 ================================================

function describecity(city  : string , country: string = "Pakistan"){
console.log(`${city} is in " ${country}" `);

}
describecity("Karachi");
describecity("Ialamabad");
describecity("Dehli" ,"India ")
//============================================================================================================

// ============================================= task # 39 ==================================================

function city(city: string , country :
     string) : string{
 return `${city} , ${country}`
}
console.log( city("Lahore","Pakistan"));
console.log(city("Tornoto", "Canada"));
console.log(city("Berlin","Japan"));
//==============================================================================================================

// ============================================= task # 40 =====================================================

function makeAlbum(artist_name: string , albumtittle :string, tracks?:number){
let album :{artist: string, tittle:string, tracks?:number}={
artist: artist_name,
tittle: albumtittle,
};
if (tracks !==undefined){
album.tracks = tracks
}
return album;
}

let album1 =(makeAlbum("Shagufta", "KhanZadi", 45));
let album2 =(makeAlbum("Shagufta", "KhanZadi", 45));
let album3 =( makeAlbum("Haniya", "Zehra"));
let album4 =(makeAlbum("Rohail", "RJ"  ,22));
console.log(album1 , album2 , album3 , album4);
