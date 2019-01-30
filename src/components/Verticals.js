import React, { Component } from "react";
import json from "../json/categories.json";
import Categories from "./Categories";

class Verticals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.open = this.open.bind(this);
  }
  open(event) {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div>
        <ul>
          <div>
            <li className="verticals" onClick={this.open}>
              {this.props.json.Name}
            </li>
            {this.state.open
              ? json
                  .filter(x => this.props.json.Id === x.Verticals)
                  .map(x => {
                    return <Categories key={x.Id} json={x} />;
                  })
              : null}
          </div>
        </ul>
      </div>
    );
  }
}

export default Verticals;
