import React, { useState } from "react";

export default function MetricsList() {
  const [done, setDone] = useState("01/01");
  const handleUpdate = () => setDone("01/05");
  return (
    <div>
      <button data-testid="water" onClick={handleUpdate} />
      <div data-testid="waterDone">{done}</div>
    </div>
  );
}
