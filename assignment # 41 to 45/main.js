//================================================= task # 41 ========================================================
function magicians_name1(magicians) {
    magicians.forEach(news => console.log(news));
}
let magicians_array = ["Hadi", "Haniya", "Jawad"];
magicians_name(magicians_array);
// ==================================================task # 42 ==========================================================
function magicians_name2(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great3(magicians) {
    return magicians.map(name => ` The Great ${name}`);
}
let magicianarray4 = ["Haniya", "Hadi", "Shazia"];
let makegreat = make_great(magicianarray4);
magicians_name(makegreat);
// ================================================== task # 43 =========================================================
function magicians_name(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => ` The Great ${name}`);
}
let magicianarray = ["Haniya", "Hadi", "Shazia"];
let great = make_great(magicianarray);
magicians_name(great);
let copy_magicianarray = magicianarray.slice;
//let copy_make_great= make_great(copy_magicianarray)
magicians_name(magicianarray);
//magicians_name(copy_make_great)
//task# 44
function sandwitches(...items) {
    console.log("Sandwitche Order");
    for (let i = 0; i < items.length; i++)
        console.log(`- ${items[i]}`);
}
console.log("enjoy your sandwitch");
sandwitches(`capsicum,tomato, garlic,`);
sandwitches(`beef, chilli garlic, salad`);
sandwitches(`garlic,mayoo,chicken`);
export {};
