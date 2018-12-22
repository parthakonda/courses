function MyClass(parameter) {
    console.log(this);
    this.mySweetVariable = parameter;
    this.getValue = function () {
        console.log(this.getValue);
        return this.getValue();
    }
}

const myObject = new MyClass();