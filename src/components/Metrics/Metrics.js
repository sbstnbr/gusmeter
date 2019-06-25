import React from "react";

export default function Metrics(props) {
  const { id, done } = props;
  return <div data-testid="metrics">{id + done}</div>;
}
