# Understanding `getters` and `setters`

## Understanding `getters`

If you want to hide some details (not for overriding) and wanted to expose the values (might require some computation) then using `Object.definePropery` you can do.

    function Movie (name, releaseDate) {
        this.name = name;
        this.releaseDate = releaseDate;

        Object.defineProperty(this, 'repr', {
            get: function () {
                return `${this.name} - ${this.releaseDate}`;
            }
        })
    }

    const wanted = new Movie('wanted', 2010);

    console.log(wanted.name);
    console.log(wanted.releaseDate);
    console.log(wanted.repr);

    output:
    ----------------------------
    wanted
    2010
    wanted - 2010

## Understanding `setters`

    function Movie (name) {
        this.name = name;

        Object.defineProperty(this, 'date', {
            set: function(date) {
                this.releaseDate = date;
            }
        })
    }

    const wanted = new Movie('wanted');
    wanted.date = 2010;

    console.log(wanted.name);
    console.log(wanted.releaseDate);
