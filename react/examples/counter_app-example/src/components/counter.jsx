import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: []
  };

  styles = {
    fontSize: 10
  };

  renderTags() {
    if (this.state.tags.length > 0) {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    } else {
      return <h1>There are no tags</h1>;
    }
  }

  handleIncrement = product => {
    console.log("Handle Increment", this);
    console.log(product);
    // this.state.count++; // wont work
    this.setState({
      value: this.state.value + 1
    });
  };

  handleDelete = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  render() {
    console.log("props", this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger m-2 btn-sm'>
          Delete
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create a tag"}
          {this.renderTags()}
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
