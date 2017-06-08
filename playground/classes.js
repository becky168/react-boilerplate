/**
 * Usually use captalize as class name
 */
class Person {
    /* body of the class */
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I'm ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

    toString() {
        /* override toString method of Object */
        // return this.getGreeting();
        return JSON.stringify(this);
    }
}

class Child extends Person {
    constructor(name, age, like) {
        /*
         * Note: In derived classes, super() must be called before you
         * can use 'this'. Leaving this out will cause a reference error.
         */
        super(name, age);
        this.like = like;
    }
    getGreeting() {
        return `Hiiiiii! My name is ${this.name} and I like ${this.like}.`;
    }
}

class Baby extends Person {
    getGreeting() {
        return `Wahhhhhhh!`;
    }
}

/* automatically call class Person */
var me = new Person("Andrew", 25);

console.log(me);
console.log(me.getGreeting());

console.log({age:25}.toString());
console.log(me.toString());

console.log(me.getDescription());

var anonymous = new Person();
console.log(anonymous.getDescription());

var anonymous2 = new Child("Mike", 4, "Cars");
console.log(anonymous2.getGreeting());

var anonymous3 = new Baby("Mike", 4);
console.log(anonymous3.getGreeting());