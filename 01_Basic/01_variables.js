const accountId = 1445566
let accountEmail = "chitra@gmail.com"
var accountPassword = "123456"
accountcity = "Kathmandu"
let accountstate;

//accountId = 3// not allowed
accountEmail = "ch@12gmail.com"
accountPassword = "46464"
accountcity = "Bagmati"

/*
Prefer not to use var because of issue ib block scope and functional scope.
console.table is use for print all written code  at a single code in a tabular form.
console.log is used for print.
If we write anythings in const then it not change.
*/

console.log(accountId);
console.table ([accountEmail, accountPassword, accountcity, accountstate])
