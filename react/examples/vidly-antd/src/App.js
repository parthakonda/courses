import React, { Component } from "react";
import AButton from "./components/button.Component";
import AIcon from "./components/icon.Component";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AButton />
        <AIcon />
      </div>
    );
  }
}

export default App;
