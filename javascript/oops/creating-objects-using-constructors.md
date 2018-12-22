# Creating objects using constructors

- Constructor function means a normal javascript `function`
- The name of the function should start with Caps


        function Movie () {

        }

- You can create properties and method using `this` inside the function

        function Movie () {
            this.name = 'Wanted';
            this.releaseDate = 2010;
            this.play () {
                console.log(`Playing movie ${this.name}`);
            }
        }

- You can create object for this function using keyword `new`

        const wantedMovie = new Movie();

- `new` keyword does 3 things.

  - It will create an object using object literal i.e., `{}`
  - It will assign the created object to `this`
  - It will return this object automatically from the function.

## Creating object using `constructor`

    funtion Movie (name, date) {
        console.log(`this: ${this}`);
        this.name = name;
        this.date = date;
        this.play = function () {
            console.log(`Playing movie ${this.name}`);
        }
    }

    const wantedMovie = Movie('Wanted', 2010);
    wantedMovie.play();
    --------------------
    output:

    window Object
    Playing movie Wanted

Oh, wait `this` is returning Window object?

Oh ya, by default this refers to parent object i.e., window object. When you don't use `new` while creating object then it will take the parent object i.e., `window`.

    funtion Movie (name, date) {
        console.log(`this: ${this}`);
        this.name = name;
        this.date = date;
        this.play = function () {
            console.log(`Playing movie ${this.name}`);
        }
    }

    const wantedMovie = new Movie('Wanted', 2010);
    wantedMovie.play();
    --------------------
    output:

    Movie Object
    Playing movie Wanted

There you go, `this` is assigned with `{}` (which is created by `new`)
