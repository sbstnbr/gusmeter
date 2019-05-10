import React, { Component } from "react";
import MetricsList from "./MetricsList";
import { withFirebase } from "./components/Firebase";
class App extends Component {
  render() {
    const MetricsListFirebase = withFirebase(MetricsList);
    return (
      <div>
        <MetricsListFirebase />
      </div>
    );
  }
}

export default App;
