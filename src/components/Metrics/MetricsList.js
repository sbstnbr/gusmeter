import React, { useState, useEffect } from "react";
import Metrics from "./Metrics";

export default function MetricsList(props) {
  const { firebase } = props;
  useEffect(() => {
    setIsLoading(true);
    firebase.db
      .collection("metrics")
      .get()
      .then(result => {
        const metrics = result.docs.map(query => ({
          id: query.id,
          done: query.data().done.toDate()
        }));
        setIsLoading(false);
        setMetricsList(metrics);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [firebase.db]);
  const [isLoading, setIsLoading] = useState(true);
  const [done, setDone] = useState("01/01");
  const [metricsList, setMetricsList] = useState([{ id: "YO" }]);
  const handleUpdate = () => setDone("01/05");
  return (
    <div>
      <button data-testid="water" onClick={handleUpdate} />
      <div data-testid="waterDone">{done}</div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        metricsList.map(metrics => (
          <Metrics key={metrics.id} id={metrics.id} done={metrics.done} />
        ))
      )}
    </div>
  );
}
