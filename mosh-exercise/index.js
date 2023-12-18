console.log("Hello World!")
console.log("hihihi")
// let, not var
let myname = "uuu";
console.log(myname);
const interest_rate = 0.05;
// interest_rate = 1; // error
console.log(interest_rate);
// object
let person = {
    name: "Mosh",
    age: 30
};
// array
let arr = [1, 2, "three"];
console.log(arr);

// function
function square(num) {
    let ans = num * num;
    console.log(ans);
    return ans;
}

// comparison
a = "3"
b = 3
console.log(a == b); // loose equality
console.log(a === b); // strict equality
console.log(a !== b)
// look at left type, convert right to it
console.log(true == 1)

// ternary operator 三目
// <expression > ? <value_if_true> : <value_if_false>
