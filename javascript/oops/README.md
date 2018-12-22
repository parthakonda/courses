# OOPs in JavaScript

## Traditional OOPS has the following concepts

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

## Functional Programming

In this we'll be having set of functions and you'll be working with functions that modifies the data and perform some computation.

So, lets assume if you've large application then you'll be writing large number functions and points one to another. This will lead us creating confusion and speghatti code.

## Object Oriented Programming

Using OOPs we can group the related data and related functionality together.

- data: properties
- functions: methods

Collectively we'll call them as units.

Example:<br>

    Think of `localStorage`. Consists of `setItem`, `getItem`

    localStorage.setItem('key', 'mySweetValue')

    localStorage.key
    --------------
    output:
    mySweetValue

    Here, we're feeding data to the localStorage using methods. Such as, binding data in the methods.

    This is called `encapsulation`.

Example - 2:

`using-functions.js`

    let employeeName = 'John Doe';
    let employeeAge = 25;
    let employeeSalary = '100$';

    function getEmployeeDetails (name, age, salary) {
        return `name: ${name}, age: ${age}, salary: ${salary}`;
    }

In the above, the data employeeName can be changed by any other thing.

`using-objects.js`

    let employee = {
        name: 'John Doe',
        age: '25',
        salary: '100$',
        getEmployeeDetails: function (){
            return `name: ${this.name}, age: ${this.age}, salary: ${this.salary}`;
        }

    employee.getEmployeeDetails();
