// 1. undefined
// case 1: chua assign gia tri ch variable
let a;
if (a === undefined) {
  console.log("a is undefined, please assign now !!!");
}

// case 2: lay property khong ton tai trong object
let obj = { name: "Ngoc Anh", age: "25" };
console.log(obj.sex);

// case 3: lay index khong tin tai trong mang
let arr = [1, 2, 3];
console.log(arr[4]);

// case 4:
let add = undefined;
console.log(add);
console.log("typeof of add:", add);

//////////////////////////////////////////////////////////
// 2. null
// - Co 2 truong hop gay ra null
// case1: chung ta expected la object, nhung khong tra ve duoc.
const element = document.getElementById("phamngocanh");
console.log("element-value", element);
console.log("type of cua null", typeof element);

// case 2: const number = null;

//////////////////////////////////////////////////////////
// 3. NaN (Not a number)
const number1 = "13abc" / 3;
console.log("number1 - NaN: ", number1); // NaN

const number2 = 0 / 0;
console.log("number2 - NaN", number2); // NaN

const number3 = -3 / 0;
console.log("number3 - NaN", number3); // -Infinity

console.log("typeof of NaN: ", typeof number1);
console.log("tcompare NaN and NaN ", number1 == NaN);

//////////////////////////////////////////////////////////
// 4. Coercion
// case 1: So number and string
console.log("compare number and string in js: ", 69 == "69"); // true
console.log("compare number and string in js: ", 69 == "abc"); // false

// case 2: compare boolean
console.log("compare boolean: ", "1" === true); // true

//////////////////////////////////////////////////////////
// 5. Object trong javascript
// Cach 1:
const person = {
  firstName: "Anh",
  lastName: "Pham Ngoc",
  showName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// Cach 2: Object constructor
const psn = new Object();
psn.firstName = "Anh";
psn.lastName = "Pham Ngoc";
psn.showName = function () {
  console.log(this.firstName + " " + this.lastName);
};

//////////////////////////////////////////////////////////
// 6. Prototype (!property)

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.showFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

var singer = new Person("Linh", "Hoang Thuy");
console.log(singer); // Person { firstName: "Linh", lastName: "Hoang Thuy" }
singer.showFullName(); // Linh Hoang Thuy
