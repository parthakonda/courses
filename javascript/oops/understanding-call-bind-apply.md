# Understanding `call`, `bind` and `apply`

## Understanding `call`

- `call` to call a function

        function Movie (name) {
            this.name = name;
        }

        const wanted = new Movie('wanted');

        // Another way of calling function Movie

        const matrix = Movie.call({}, 'matrix');

- `call` can take `n` no of arguments
- first argument will be assigned to its objects, here `{}` new object will be assigned to its `this`

So,

    const wanted = Movie('wanted');

    // is equivalent to

    const wanted = Movie.call(window, 'wanted');

As I mentioned in the previous topics, by default it will take the window (parent) object.

Note: And `new` operator will return its object (this) implicitely from the function and there is no need to return. Where as if you use `call` then it won't work.

Example - 2:

    let employee = {
        name: 'Partha',
        salary: 100000
    }

    function showSalary () {
        return this.salary;
    }

    const employeeSalary = showSalary.call(employee);

    console.log(employeeSalary);

    ouptut:
    -------------------
    100000

So you can provide whatever object that you want to use as `this`.

Example - 3: (With one or more arguments)

    let employee = {
        name: 'Partha',
        baseSalary: 100000
    }

    function addSalary (homeExpenses, bonusSalary, fuelExpenses) {
        return this.baseSalary + homeExpenses + bonusSalary + fuelExpenses;
    }

    const employeeSalary = showSalary.call(employee, 1000, 200, 4000);

    console.log(employeeSalary);

    ouptut:
    -------------------
    105200

So, the first argument of the `call` method will be the object and rest of the methods are the arguments for the actual method.

## Understanding `apply`

`apply` is also same as `call` where as if you want to provide the actual arguments to the function using array then you can use apply.

    let employee = {
        name: 'Partha',
        baseSalary: 100000
    }

    function addSalary (homeExpenses, bonusSalary, fuelExpenses) {
        return this.baseSalary + homeExpenses + bonusSalary + fuelExpenses;
    }

    let additionalSalary = [
        1000, // homeExpnses
        200, // bonusSalary
        4000 // fuelExpenses
    ]
    const employeeSalary = showSalary.call(employee, additionalSalary);

    console.log(employeeSalary);

    ouptut:
    -------------------
    105200

Note:

You can also achieve the same functionality by using the new ES6 feature called `spread (...)` operator.

    showSalary(...additionalSalary);

## Understanding `bind`

`bind()` is used to bind the default `this` object. Means, it will bind the specified value to the `this` in Function object and returns its reference.

    function Movie () {
        console.log(this.name);
    }

    Movie();

    output:
    ---------------------
    empty

However, you can achieve this by using `call` or `apply`

    Movie.call({name: 'Value'});

    output:
    ---------------------
    Value

The above you've to provide first argument for each `call` method. But whenever if you're looking for assigning default value to `this` dynamically then `bind` is useful.

    Movie = Movie.bind({name: 'Value'});

    Movie();

    output:
    ----------------------
    Value
