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
a = "3";
b = 3;
console.log(a == b); // loose equality
console.log(a === b); // strict equality
console.log(a !== b);
// look at left type, convert right to it
console.log(true == 1);

// ternary operator 三目
// <expression > ? <value_if_true> : <value_if_false>
console.log("false" || false);

function max_of_two(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}

console.log(max_of_two(3, 5));
console.log(max_of_two(7, 3));

function is_landscape(width, height) {
    return width > height;
}

const fiz_buzz = function(input) {
    if (typeof input !== "number") return NaN;
    if (input % 15 === 0) return "FizzBuzz";
    if (input % 3) return "Fizz";
    if (input % 5) return "Buzz";
    return input;
}

console.log(fiz_buzz(3));

const check_speed = (speed) => {
    // assume 70 limit
    const point = Math.floor((speed - 70) / 5);
    if (point) {
        if (point >= 12) return "Suspended";
        return "Point => " + point;
    }
    else return "Ok";
}

console.log(check_speed(75));
console.log(check_speed(74));

