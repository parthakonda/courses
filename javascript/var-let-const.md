# Understanding `var`, `let` and `const`

As you know that Javascript is not strict type based. And it is very easy to understand the data types.

However, `var` was the only data type present in ES2015 and later `let` and `const` added.

### var

- Used for declare a variable
- Optionally you can initialize value

Example:<br>
`var.example.js`

    var mySweetVariableNumber = 10;
    var mySweetVariableString = 'Awesome Value';

    console.log(mySweetVariableNumber);
    console.log(mySweetVariableString);

    ---------------------------------
    output:

    10
    Awesome Value

### let

- Used for declare a variable
- Optionally you can initialize value

Example:<br>
`let.example.js`

    let mySweetVariableNumber = 10;
    let mySweetVariableString = 'Awesome Value';

    console.log(mySweetVariableNumber);
    console.log(mySweetVariableString);

    ---------------------------------
    output:

    10
    Awesome Value

### const

- Used for declare a variable
- Optionally you can initialize value

Example:<br>
`const.example.js`

    const mySweetVariableNumber = 10;
    const mySweetVariableString = 'Awesome Value';

    console.log(mySweetVariableNumber);
    console.log(mySweetVariableString);

    ---------------------------------
    output:

    10
    Awesome Value

Wait,

Question:<br>
`var`, `let` and `const` are same? then why we need to use 3 of them?

JavaScript:<br>
Well, yes the 3 of them are mostly similar. But have some following differences.

### `var`<br>

- When you declare a variable with `var` then they will be processed before execution of code.
- `scope` of this variable will be is its current execution context
