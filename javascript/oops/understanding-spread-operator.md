# Understanding spread (...) in Javascript

There are 2 advantages with `spread(...)` operator

- Deep copy
- Dynamic arguments

- `Deep copy`

        let original = [ 1, 2, 3 ];
        let duplicate = original;

        duplicate[0] = 10;

        console.log(original);
        console.log(duplicate);

        output:
        -------------------------
        [10, 2, 3]
        [10, 2, 3]

  The above is the problem when you're trying to copy the value (reference type)

  Solution - 1:

        let original = [ 1, 2, 3 ];
        let duplicate = Object.assign([], original);

        duplicate[0] = 10;

        console.log(original);
        console.log(duplicate);

        output:
        -------------------------
        [1, 2, 3]
        [10, 2, 3]

  Solution - 2:

        let original = [ 1, 2, 3 ];
        let duplicate = original.concat([]);

        duplicate[0] = 10;

        console.log(original);
        console.log(duplicate);

        output:
        -------------------------
        [1, 2, 3]
        [10, 2, 3]

  Solution - 3 using spread operator:

        let original = [ 1, 2, 3];
        let duplicate = [...original];

        duplicate[0] = 10;

        console.log(original);
        console.log(duplicate);

        output:
        -------------------------
        [1, 2, 3]
        [10, 2, 3]

- `Dynamic Arguments`

  Help you to provide arguments dynamically.

  Solution - 1 (using `call`):

        function movie(name, releaseDate){
            console.log(`${name} released on ${releaseDate}`);
        }

        movie.call({}, 'Wanted', 2010);

        output:
        --------------------
        Wanted release on 2010

  Solution - 2 (using `apply`):

        function movie(name, releaseDate){
            console.log(`${name} released on ${releaseDate}`);
        }

        movie.apply({}, ['Wanted', 2010]);

        let movieDetails = ['Wanted', 2010];

        movie.apply({}, movieDetails);
        output:
        --------------------
        Wanted release on 2010
        Wanted release on 2010

  Solution - 3 (using `spread(...)` operator

        function movie(name, releaseDate){
            console.log(`${name} released on ${releaseDate}`);
        }

        movie.apply({}, ['Wanted', 2010]);

        let movieDetails = ['Wanted', 2010];

        movie.apply({}, movieDetails);

        movie(...movieDetails);

        output:
        --------------------
        Wanted release on 2010
        Wanted release on 2010
        Wanted release on 2010
