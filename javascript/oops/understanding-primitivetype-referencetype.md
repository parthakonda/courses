# Understanding primitive and reference types in Javascript

When you say javascript is not having types then its wrong.

Javascript have types but those are dynamic and week type.

- what do you mean by dynamic type?

  Means the data types will get assigned at runtime.

  let x = 10; // Number

  At time of declaration you don't need to specify that as Number

  i.e.,

  let x = new Number(10);

  javascript automatically does convert the that into Number at rumtime.

- And what do you mean by week type?

  Well, its mean type coersion. When you're trying to modify the type then javascript does allow you to do that. Other languages like C, Java, etc won't let you to do that.

  i.e.,

        let x = 10;
        let y = 'test';

        let z = x + y;

        console.log(z);

        output:
        ---------------------
        10test

There are 2 categories of types

- Primitive Type
- Reference Type

- `Primitive Type`:

  The following types are fall under primitive types.

  - Number
  - String
  - Boolean
  - null
  - undefined
  - Symbol

    Example - 1:

        let x = 1;
        let y = x;

        // x and y are independant
        // So

        y = 2;

        console.log(x, y);

        output:
        -------------------
        1, 2

    The same thing will be applied to all the primitive or value type

* `Reference Type`:

  The following fall under Reference Type

  - Object
  - Function
  - Array

  Example:

        let x = {
            a: 1
        }

        let y = x;

        // Here, both x and y have the same reference (memory)
        // So if I change value of y then x will also get changed

        y[a] = 2;
        y['newkey'] = 3;

        console.log(x);
        console.log(y);

        output:
        -----------------------
        {a: 2, newkey: 3}
        {a: 2, newkey: 3}
