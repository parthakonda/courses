# Understanding `react`

- React is a javascript library
- Used to create reusable components
- Created by facebook - 2011
- React adopted by so many developers
- It not like other frameworks like Angular or Vue

React is all about building components. Component is a reusable UI component.
All these small components can be used to build a large or complex UI.

The philosophy of react is to build small components independantly (more lose coupled) to build a complex UI.

    class MyComponent extends React.Component {

        // To hold the data
        state = {

        }

        // To display the data
        render () {

        }
    }

So, you're saying that `render()` method is for displaying the content based on the state. So does this `render()` method will change the DOM when data bind (data changes)

Not at all.

In general, with jquery or angularjs when you change any state or data jquery/angularjs will find the DOM element based on selector. But in react, it maintains the mapping of the DOM in the form of VirtualDOM. With this, it is able to track the changes of state and draw version. And able to identify the changes using VirtualDOM and once identifies the changes then it is going to paint the actual DOM.

So, the name react means `it reacts to state changes`
