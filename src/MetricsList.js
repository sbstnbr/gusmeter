import React, { useState, useEffect } from "react";

export default function MetricsList(props) {
  const { firebase } = props;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await firebase.db.collection("metrics").get();
      const metrics = result.docs.map(query => ({
        id: query.id,
        ...query.data()
      }));
      console.log(metrics);
      setIsLoading(false);
      setMetricsList(metrics);
    };
    fetchData();
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
        <ul>
          {metricsList.map(metrics => (
            <li key={metrics.id}>{metrics.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
