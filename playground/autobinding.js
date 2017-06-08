var obj = {
    name: "Andrew",
    printName: function () {
        console.log(`My name is ${this.name}.`);
    }
};

obj.printName();
setTimeout(obj.printName, 1000); // ${this.name} will be undefined
/* .bind(obj) will bind obj as this */
setTimeout(obj.printName.bind(obj), 1000);
setTimeout(obj.printName.bind({name: "Mike"}), 1000);