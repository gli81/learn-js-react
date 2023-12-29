/**
 * Encapsulation
 * Abstraction
 * Inheritance
 * Polymorphism
 */


// object literals
const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    draw: function(){
        console.log(this.radius);
    }
};
circle.draw();

// factory
const create_circle = (radius) => {
    return {
        radius,
        draw: function(){
            console.log("draw");
        }
    }
};

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(draw);
    }
};

const another = new Circle();


// constructor property
console.log(another.constructor)

// value vs. reference

// dot notation & bracket notation

/** 
 * enumerating: for (let key in circle) {}
 * Object.keys()
 * 
 * 
 */ 

function Circle(radius) {
    this.radius = radius;
    // private property
    let default_location = {x: 0, y: 0};
    // private method
    let compute_optimal_location = function() {

    }
    this.draw = function() {
        compute_optimal_location();
        console.log(draw);
    }
};

/**
 * gettor and settor
 * Object.defineProperty() & Object.defineProperties()
 * 
 */

function Stopwatch() {
    let duration = 0;
    let start_time = 0;
    let end_time = 0;
    let started = false;
    this.start = () => {
        if (started) {
            throw new Error(
                "Stopwatch has already started."
            );
        }
        started = true;
        start_time = new Date();
    };
    this.stop = () => {
        if (!started) {
            throw new Error(
                "Stopwatch is not started."
            );
        }
        started = false;
        end_time = new Date();
        const secs = (end_time.getTime() - start_time.getTime()) / 1000;
        console.log("secs =>", secs);
        duration += secs;
    };
    this.reset = () => {
        started = false;
        duration = 0;
    };
    Object.defineProperty(
        this, "duration", {
            get: function() {
                return duration;
            }
        }
    );
}

const test = new Stopwatch();
test.start();
// function sleep(time) {
//     return new Promise(r => setTimeout(r, time));
// };
// sleep(500);
setTimeout(() => {
    test.stop();
    test.reset();
    console.log(test.duration);
}, 1000);
// test.stop();


