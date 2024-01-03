"use strict";
console.log("test");
let Name = "Fadwa";
let Age = 20;
Age = "fadwa";
let All; //any
All = "fadwa";
console.log(Name);
let Or = "Fadwa";
Or = true;
Or = 30;
let allArray = ["fadwa", 34];
let mAraay = [
    1,
    2,
    3,
    ["fadwa", "ali"],
    true,
    false,
    [1, 2, 3],
];
function getArr(btn) {
    console.log(`UP ${btn.u}`);
    console.log(`LEFT ${btn.l}`);
    console.log(`RIGHT ${btn.r}`);
    console.log(`DOW ${btn.d}`);
}
getArr({ u: "stt", l: "lee", r: "ree", d: "ssss", x: false });
//# sourceMappingURL=index.js.map