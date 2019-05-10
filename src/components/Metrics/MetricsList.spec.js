import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import MetricsList from "./MetricsList";

describe("<MetricsList />", () => {
  let getByTestId;

  afterEach(cleanup);

  describe("clicking the water button", () => {
    beforeEach(() => {
      ({ getByTestId } = render(<MetricsList />));
      fireEvent.click(getByTestId("water"));
    });

    it("updates the water done date", () => {
      expect(getByTestId("waterDone").innerHTML).toEqual("01/05");
    });
  });
});
