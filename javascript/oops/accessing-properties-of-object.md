# Accessing, adding and removing properties

    const movie = function (name) {
        this.name = name;
    }

    const wanted =  new movie('Wanted');

    wanted.releaseDate = 2010;
    wanted['type'] = 'Action';
    const hd = 'isHD';
    wanted[hd] = true;

    console.log(wanted);

    output:
    ------------------------
    {
        name: wanted,
        releaseDAte: 2010,
        type: Action,
        isHD: true
    }

You can see different ways of adding properties.

## Deleting a property

    delete wanted.releaseDate;

    console.log(wanted);

    output:
    ----------------------
    {
        name: wanted,
        type: Action,
        isHD: true
    }
