"use strict";
// enum
// numeric enum
// enum Month {
//     JAN,
//     FEB,
//     MAR,
//     APR
// }
// enum Month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR
// }
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
})(Month || (Month = {}));
console.log(Month.JAN);
