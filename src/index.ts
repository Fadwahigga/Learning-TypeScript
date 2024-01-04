// console.log("test");
// let Name: String = "Fadwa";
// let Age: any = 20;
// Age = "fadwa";
// let All; //any
// All = "fadwa";
// console.log(Name);

// let Or: String | Number | boolean = "Fadwa";
// Or = true;
// Or = 30;
// let allArray: (string | number)[] = ["fadwa", 34];
// let mAraay: (number | boolean | string[] | number[])[] = [
//   1,
//   2,
//   3,
//   ["fadwa", "ali"],
//   true,
//   false,
//   [1, 2, 3],
// ];
/**Type Alias */
// type stringnumber = string | number;
// let test: stringnumber = 10;
// test = "fadwa";
/** Type Alias Advanced */
// type Buttons = {
//   u: string;
//   l: string;
//   r: string;
//   d: string;
// };
// type Last = Buttons & { x: boolean };
// function getArr(btn: Last) {
//   console.log(`UP ${btn.u}`);
//   console.log(`LEFT ${btn.l}`);
//   console.log(`RIGHT ${btn.r}`);
//   console.log(`DOW ${btn.d}`);
// }
// getArr({ u: "stt", l: "lee", r: "ree", d: "ssss", x: false });
// type nums = 0 | 1 | -1;
// function compare(num1: number, num2: number): nums {
//   if (num1 === num2) {
//     return 1;
//   } else if (num1 > num2) {
//     return -1;
//   } else {
//     return 0;
//   }
// };
// console.log(compare(2,4));

/**Interface */
interface User {
  id: number;
  userName: string;
  country: string;
}
let user: User = { id: 100, userName: "fadwa", country: "sudan" };
console.log(user);
const getUser = (data: User) => {
  console.log(`ID is ${data.id}`);
  console.log(`UserName is ${data.userName}`);
  console.log(`Country is ${data.country}`);
};
getUser({ id: 100, userName: "fadwa", country: "sudan" });
