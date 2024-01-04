"use strict";
// console.log("test");
// let Name: String = "Fadwa";
// let Age: any = 20;
// Age = "fadwa";
// let All; //any
// All = "fadwa";
// console.log(Name);
let user = { id: 100, userName: "fadwa", country: "sudan" };
console.log(user);
const getUser = (data) => {
    console.log(`ID is ${data.id}`);
    console.log(`UserName is ${data.userName}`);
    console.log(`Country is ${data.country}`);
};
getUser({ id: 100, userName: "fadwa", country: "sudan" });
//# sourceMappingURL=index.js.map