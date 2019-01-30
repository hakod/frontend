import React, { Component } from "react";
import json from "../json/courses.json";

class Courses extends Component {
  render() {
    return (
      <div>
        {json
          .filter(x => x.Categories === this.props.Id)
          .map(x => {
            return (
              <div className="courses" key={x.Id}>
                <li>{x.Name}</li>
                <li>Author: {x.Author}</li>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Courses;
