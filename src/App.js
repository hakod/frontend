import React, { Component } from "react";
import Verticals from "./components/Verticals";
import json from "./json/verticals.json";

class App extends Component {
  render() {
    return (
      <div>
        {json.map(x => {
          return <Verticals key={x.Id} json={x} />;
        })}
      </div>
    );
  }
}

export default App;
