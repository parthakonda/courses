import React, { Component } from "react";
import { Icon } from "antd";

class AIcon extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Icon type='home' />
        <Icon type='setting' theme='filled' />
        <Icon type='smile' theme='outlined' />
        <Icon type='sync' spin />
        <Icon type='loading' />
      </React.Fragment>
    );
  }
}

export default AIcon;
