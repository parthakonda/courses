# Understanding constructor property

By default every object have default property callyed `constructor`.

- What it does?<br>
  It holds the reference of the function which creates that object.

We've seen 3 ways of creating objects.

- Using object literal
- Using factory
- Using constructor

        // Object Literal `{}`
        let Movie = {
            name: 'Wanted',
            date: 2010,
            play: function () {
                console.log('Playing movie Wanted');
            }
        }

        console.log(Movie.constructor);

        --------------------------
        output:
        ƒ Object() { [native code] }


        // Factory pattern
        let createMovie = function (name, date) {
            return {
                name, // If key and value are same you provide only one. i.e., name
                releaseDate: date,
                play: function () {
                    console.log(`Playing movie ${name}`);
                },
                resume: function () {
                    console.log(`Resuming movie ${name}`);
                },
                stop: function () {
                    console.log(`Stopping movie ${name}`);
                }
            }
        }

        const wantedMovie = createMovie('wanted', 2010);
        console.log(wantedMovie.constructor);

        --------------------------
        output:
        ƒ Object() { [native code] }



        // Constructor pattern
        function Movie (name, date) {
            console.log(`this: ${this}`);
            this.name = name;
            this.date = date;
            this.play = function () {
                console.log(`Playing movie ${this.name}`);
            }
        }
        const matrix = new Movie('Matrix', 2012);
        console.log(matrix.constructor);

        --------------------------
        output:

        ƒ Movie (name, date) {
            console.log(`this: ${this}`);
            this.name = name;
            this.date = date;
            this.play = function () {
                console.log(`Playing m…

In the above 3 patterns, for object literal and factory pattern it is showing `ƒ Object() { [native code] }`

where

- `f` - function
- `Object` - default Object constructor function

for `constructor` pattern it is showing that `f Movie`

where

- `f` - function
- `Movie` - which is a constructor function that we've implemented.

So you can guess the following from the JavaScript Engine perspective.

    let movie = {};

    // equivalent to

    let movie = new Object();

What are other default constructor functions available?

- String

        let name = 'Partha';
        // is equivalent to
        let anotherName = new String('Partha');

        name.constructor
        output:
        ƒ String() { [native code] }

        anotherName.constructor
        output:
        ƒ String() { [native code] }

- Number

        let age = 25;
        // is equivalent to
        let anotherAge = new Number(25);

        age.constructor
        output:
        ƒ Number() { [native code] }

        anotherAge.constructor
        output:
        ƒ Number() { [native code] }

- Boolean

        let employed = true;
        // is equivalent to
        let isEmployed = new Boolean(true);

        employed.constructor
        output:
        ƒ Boolean() { [native code] }

        isEmployed.constructor
        output:
        ƒ Boolean() { [native code] }
