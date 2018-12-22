# Functions are objects

In javascript we've seen different ways of creating objects. And one of the way to create an object is by using `function`.

What javascript says is that function is also an object.

Wait, what?

Yes, let's see

    function Movie (name) {
        this.name = name;
    }

So, are you saying that Movie is an object? in that case, we can check the by checking its constructor, no?

Yes, correct.

let's see again.

    console.log(Movie.constructor);

    output:
    ---------------
    ƒ Function() { [native code] }

Got it. So in that case, we can create object using its constructor, no?

Yes, correct.

let's try that.

    const Movie = new Function('name', `
        this.name = name;
    `)

    const wantedMovie = new Movie('Wanted');
