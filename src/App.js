import React, { Component } from "react";
import MetricsList from "./components/Metrics/MetricsList";
import { withFirebase } from "./components/Firebase";
import camper from "./icons/camper.svg";
class App extends Component {
  render() {
    const MetricsListFirebase = withFirebase(MetricsList);
    return (
      <div>
        <header>
          <img src={camper} style={{ height: "200px" }} alt="Camper" />
        </header>
        <MetricsListFirebase />
      </div>
    );
  }
}

export default App;
