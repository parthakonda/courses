# Creating objects using factory

General definition: Factory which manufactures something.

In this case, if we want to have similar type of objecs with same properties and method then we need a factory which can manufacture the objects for us.

So, we're gonna need something that can `return` an object `{}`

    let createMovie = function (name, date) {
        return {
            name: name, // If key and value are same you provide only one. i.e., name
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

    Refactored
    -----------------------------

    // Factory Function
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

    const wantedMovie = createMovie('wanted', '2010');

    wantedMovie.play();

    ------------------
    output:
    Playing movie wanted


    const matrixMovie = createMovie('Matrix Reloaded', '2010');

    matrixMovies.play();

    ------------------
    output:
    Playing movie Matrix Reloaded

So here, the method/function `createMovie` is called factory function.
