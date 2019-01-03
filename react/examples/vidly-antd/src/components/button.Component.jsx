import React, { Component } from "react";
import { Button, Radio, Dropdown, Menu, Icon } from "antd";

class AButton extends Component {
  state = {
    size: "large",
    loading: false
  };

  handleOnLoading = loading => {
    this.setState({
      loading: !loading
    });
  };

  handleSizeChange = e => {
    console.log("Calling change", e);
    this.setState({ size: e.target.value });
  };
  render() {
    function handleClickMenu(e) {
      console.log("Meny clicked", e);
    }
    const { size, loading } = this.state;
    const menu = (
      <Menu onClick={handleClickMenu}>
        <Menu.Item key='1'>Menu - 1</Menu.Item>
        <Menu.Item key='2'>Menu - 2</Menu.Item>
        <Menu.Item key='3'>Menu - 3</Menu.Item>
        <Menu.Item key='4'>Menu - 4</Menu.Item>
      </Menu>
    );
    return (
      <React.Fragment>
        <h3>Different Types of buttons</h3>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='danger'>Danger</Button>
        <br />
        <br />
        <h3>Icons & Shapes</h3>
        <Button type='primary' shape='circle' icon='play-circle' />
        <Button type='dashed' shape='circle-outline' icon='play-circle' />
        <br />
        <br />
        <h3>Sizes</h3>
        <Button type='danger' size='large'>
          Large Button
        </Button>
        <Button type='primary' size='small'>
          Small Button
        </Button>
        <Button type='primary' size='default'>
          Default Button
        </Button>

        <h3>Grouping Buttons & dynamic size</h3>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value='large'>Large</Radio.Button>
          <Radio.Button value='default'>Default</Radio.Button>
          <Radio.Button value='small'>Small</Radio.Button>
        </Radio.Group>
        <Button size={size}>Dynamic Size Button</Button>
        <br />
        <br />
        <h3>Disabled Button</h3>
        <Button type='danger' disabled>
          Disabled
        </Button>
        <br />
        <h3>Dropdown menu</h3>
        <Dropdown overlay={menu}>
          <Button>Actions</Button>
        </Dropdown>
        <h3>Loading Button</h3>
        <Button type='danger' loading>
          Loading Button
        </Button>
        <Button
          type='primary'
          loading={loading}
          onClick={() => this.handleOnLoading(loading)}>
          Load on Click
        </Button>

        <h3>Button Group</h3>
        <Button.Group>
          <Button>
            <Icon type='left' />
            Left
          </Button>
          <Button>
            Right
            <Icon type='right' />
          </Button>
        </Button.Group>
      </React.Fragment>
    );
  }
}

export default AButton;
