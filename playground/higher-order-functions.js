function one (name, location) {
    console.log(name, location);
}

function two () {
    /* arguments: a variable in the function, not in arrow function */
    console.log("Args", arguments);

    one.apply(undefined, arguments);
}

two("Andrew", "Philidelphia");

/*
 * apply(this object, arguments):
 * available on all the functions
 * we can use apply to call function
 */
two.apply(undefined, ["Jen", "San Fran"]);


/*
 *********** Higher Order Function *************
 * 3 points:
 *   1. It is a function
 *   2. It takes a function as the one and the only argument
 *   3. It returns a function
 *
 * => It is going to modify a function
 */

var add = (a, b) => a + b;

var square = (a) => a * a;

// higher order function
var callAndLog = (func) => {
    return function () {
        var res = func.apply(undefined, arguments);
        console.log(`"Result is" ${res}`);
        return res;
    };
};

console.log(add(99, 1));

var addAndLog = callAndLog(add);
console.log(addAndLog(44, -3));

var squareAndLog = callAndLog(square);
squareAndLog(3);