import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// var -> functional scope

function testVar() {
  for (var i = 0; i < 4; i++) {
    console.log(i);
  }
  console.log("---");
  console.log(i);
}

testVar();

// let -> block scope
function testLet() {
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
  console.log("---");
  // You can't access the 'i'
  // console.log(i);
}

testLet();

const x = 1;

// The following won't work
// x = 2;

const person = {
  talk: function() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
};

console.log(person.talk());

// array map

const colors = ["orange", "green", "red"];
const paint = colors.map(color => `<li>${color}</li>`);

console.log(paint);

// object destructering

const movie = {
  name: "Wanted",
  releaseDate: 2010,
  actor: "Will Smith",
  days: 200
};

const { name, releaseDate, actor } = movie;

console.log(name, releaseDate, actor);

// spread operator

// combining arrays
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const combined = [...first, ...second];
console.log(combined);

// combining objects

const author = {
  name: "Partha"
};

const book = {
  book: "Learn Js in an easy way"
};

const course = { ...author, ...book };
console.log(course);
