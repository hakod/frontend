import React, { Component } from "react";
import Courses from "./Courses";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.open = this.open.bind(this);
  }
  open() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div>
        <li className="categories" onClick={this.open}>
          {this.props.json.Name}
        </li>
        {this.state.open ? <Courses Id={this.props.json.Id} /> : null}
      </div>
    );
  }
}

export default Categories;
