import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDelete, onReset, counters } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            counter={counter}
            selected={true}
            onIncrement={onIncrement}
            onDelete={onDelete}>
            <h4>Title</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
