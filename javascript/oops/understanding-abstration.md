# Understanding abstraction

    function Movie (name, releaseDate, cost) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.cost = cost;

        this.getCost = function () {
            return this.cost + 100;
        }
    }

    // In the above if we want to hide the details of cost

    function Movie (name, releaseDate, cost) {
        this.name = namel
        this.releaseDate = releaseDate;

        let cost = cost;

        this.getCost = function () {
            return cost + 100;
        }
    }

    By using local variable we can hide the details
