# Creating objects

- using `{}`(object) literal
- using factories
- using constructors

## using `{}object` literal

    let movie = {
        name: 'Wanted',
        releaseDate: 2010,
        play: function () {
            console.log('Playing movie Wanted');
        },
        resume: function () {
            console.log('Resuming movie Wanted');
        },
        stop: function () {
            console.log('Stopping movie Wanted');
        }
    }

    movie.play();

    ---------------------
    Playing movie Wanted

The simplest form of creating object is by using `{}` object literal.

- `name` and `releaseDate` are the properties
- `play`, `resume` and `stop` are the methods.

However, the above object is holding information of movie called `Wanted`. Let's assume I would like to create another movie `Matrix reloaded`.

    let movie = {
        name: 'Wanted',
        releaseDate: 2010,
        play: function () {
            console.log('Playing movie Wanted');
        },
        resume: function () {
            console.log('Resuming movie Wanted');
        },
        stop: function () {
            console.log('Stopping movie Wanted');
        }
    }

    let anotherMovie = {
        name: 'Matrix Reloaded',
        releaseDate: 2012,
        play: function () {
            console.log('Playing movie Matrix Reloaded');
        },
        resume: function () {
            console.log('Resuming movie Matrix Reloaded');
        },
        stop: function () {
            console.log('Stopping movie Matrix Reloaded');
        }
    }

    movie.play();
    movie.anotherMovie();

    ---------------------
    Playing movie Wanted
    Playing movie Matrix Reloaded

- How about having more movies? In this case you've to repeat the code.

- And, lets assume tomorrow you want to change the behaviour of movie `play` then you need to change at all places.

So this way is useful when you want to create different type of objects with different properties and methods.
