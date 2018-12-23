# Iterating properties of object

    function Movie (name, releaseDate) {
        this.name = name;
        this.releaseDate = releaseDate;
    }

    const wanted = new Movie('Wanted', 2010);

    // Using `for in`
    for (key in wanted) {
        console.log(key);
    }

    // Using `Object.keys()`
    Object.keys(wanted);

    // Checking key using in
    if ('name' in wanted) {
        console.log('Key found');
    }

    output:
    -----------------------
    name
    releaseDate
    ['name', 'wanted']
    Key found
