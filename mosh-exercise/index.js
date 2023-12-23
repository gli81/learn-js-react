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

const count_truthy = (array) => {
    let ans = 0;
    for (ele of array) if (ele) ans++;
    return ans;
}

console.log(count_truthy([1, "1", '', null]));

const sum = (limit) => {
    let ans = 0;
    let i = 1;
    while (i <= limit) {
        if (i % 3 === 0 || i % 5 === 0) ans += i;
        i++;
    }
    return ans;
}

console.log(sum(10));

const show_primes = (limit) => {
    for (let num = 2; num <= limit; num++) {
        if (is_prime(num)) console.log(num);
    }
}

const is_prime = (num) => {
    for (let i = 2; i < Math.floor(num ** 0.5) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(is_prime(2));
console.log(is_prime(3));
console.log(is_prime(0));
console.log(is_prime(1));
console.log(is_prime(11));
console.log(is_prime(12));

show_primes(20);

// OOP
// methods <method_name> : () => {}
// factory function
function create_circle(raidus) {
    return {
        raidus, // vaible when key value is the same
        draw() {
            console.log("Draw");
        } // simple way of <method>: function(){}
    };
}

// constructor
// use this.radius
// 类似定义一个class
function Circle(radius) {
    this.radius = radius;
    this.draw = () => {console.log("Draw")};
}
const circle = new Circle(1);
circle.draw();
const c2 = create_circle(2);
console.log(circle.constructor);
console.log(Circle.constructor);
console.log(c2.constructor);

c33 = {};
Circle.call(c33, 10101);
console.log(c33.radius);
c4 = {};
Circle.apply(c4, [101]);
console.log(c4.radius);

console.log(Object.keys(c4));
console.log(Object.entries(c4));
/**
 * let key in circle
 * let key of Object.keys(circle)
 * let entry of Object.entries(circle)
 */

// clone an object
const c5 = {};
for (let key in c4) {
    c5[key] = c4[key];
}
console.log(c5);

const c6 = {};
Object.assign(c6, c4);
console.log(c6);

// 展开运算符 又新又好
const c7 = {...c4};
console.log(c7);

// 引号定义的string和new String()定义的string的区别
// ``也能定义string
// 像是f"" in py
let c_name = "John";
const lll =
`Hi ${c_name},
welcome`;
console.log(lll);

// some exercise
function Addr(street, city, zip_code) {
    this.street = street;
    this.city = city;
    this.zip_code = zip_code;
}

const show_addr = (addr) => {
    for (let entry of Object.entries(addr)) {
        console.log(entry);
    }
}

const addr1 = new Addr("Here", "Mahrud", "00000");
show_addr(addr1);

// combine operator
const first = [1, 2, 3]
const second = [4, 5, 6]
const combined = [...first, ...second]
console.log(combined)

const array_from_range = (min, max) => {
    const ans = [];
    for (let cur = min; cur <= max; cur++) {
        ans.push(cur);
    }
    return ans;
}

const count_occurences = (array, search_ele) => {
    return array.reduce((accumulator, current) => {
        if (current == search_ele) accumulator++;
        return accumulator;
    }, 0);
}

const numbers = [1, 2, 3, 5, 1];
console.log(count_occurences(numbers, 2));

const get_max = array => {
    return array.reduce((accumulator, current) => {
        return current > accumulator ? current : accumulator;
    });
}
console.log(get_max(numbers));


// missing arguments, input undefined
// more than specified arguments, use what needed
// arguments keyword
function sum_(a, b) {
    console.log(arguments);
}

sum_(1, 2, 3);

// rest operator ...args; just like *args in python
// different meaning in function parameters
// must be the last parameter
// and in arguments

function sum_2(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum_2(1, 2, 3, 4, 5));

// default parameters
// same as in python
// 跳过一个default parameter, 传一个undefined进去
// best practice: default parameter在最后

// gettor settor
const ppp1 = {
    first_name: "John",
    last_name: "Smith",
    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    },
    set full_name(value) {
        try {
            const parts = value.split(' ');
            this.first_name = parts[0];
            this.last_name = parts[1];
        } catch (error) {
            console.log("Error");
        }
    }
};

console.log(ppp1);
console.log(ppp1.full_name);
ppp1.full_name = "jdjjdjd jdjkgaf";
console.log(ppp1.full_name);
ppp1.full_name = 1;

// try catch



// var vs. let
// var ==> function-scoped variable; do things with window object
// let const ==> block-scoped variable; doesn't do things with window object


// this keyword
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        }, this);
    }
};
video1.showTags(); // arrow function makes this pointing to the object
video2.showTags();
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const self = this;
        this.tags.forEach((tag) => {
            console.log(self.title, tag);
        });
    }
};
video3.showTags();

// call() and apply()
// bind()

// exercise
const circle_ = {
    radius: 0,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
}
circle_.radius = 1.5;
console.log(circle_.area);


