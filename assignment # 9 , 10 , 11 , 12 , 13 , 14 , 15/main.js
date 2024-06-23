// ============task # 9 ============
let favnumber = 7;
let message = "My Favourite Number is: ";
console.log(message, favnumber);
//====================================================================
//========= task #10 ============= (adding comment in any written task)
// (first comment) using 4 different operation to create same answer.
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
// (second comment) write my name with space and without space
let theName = "\n\tShagufta Kanwal\t\n";
console.log(theName);
let withoutSpaceName = theName.trim();
console.log(withoutSpaceName);
//=====================================================================
// ========= task # 11 ============ (print array in seperate line)
let FriendsName = ["Samreen", "Tooba", "Ayesha", "Manahil"];
FriendsName.forEach(items => console.log(items));
//==================================================================
// ====================== Task # 12 ===============(print friend name and message i seperate line)
let FriendName = ["Samreen", "Tooba", "manahil", "Ayesha"];
let messageconvey = ("you are a hard workimg student");
FriendName.forEach(items => console.log(items + " ,    " + messageconvey));
//===================================================================
//=========================Task # 13 ===============(print transport name with message in seperate line)
let transport = ["Honda", "Civic", "Corolla", "Audi"];
transport.forEach((items) => console.log(`I would like to own a ${items}`));
//====================================================================
//========================= Task # 14=================(make a guest array and print them a message)
let guestArr = ["Hamza", "Ali", "Sohail"];
guestArr.forEach((items) => (console.log(`Dear ${items}! You are invited to the dinner`)));
//====================================================================
//==========================Task # 15====================
let guest = ["Hamza", "Ali", "Sohail", "Ayeza"];
let notjoin = "Ali";
console.log(notjoin, "can not attend the dinner");
guest.splice(1, 1, "Alishba");
guest.forEach((items) => (console.log(`Dear ${items}!Assalamoalaikum \nyou are invited for a dinner\nThank You!`)));
export {};
//======================================================================
