import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import MetricsList from "./MetricsList";

describe("<MetricsList />", () => {
  const data = [
    {
      id: "greyWater",
      data: jest.fn().mockReturnValue({ done: { toDate: jest.fn() } })
    },
    {
      id: "water",
      data: jest.fn().mockReturnValue({ done: { toDate: jest.fn() } })
    }
  ];
  const results = {
    docs: data
  };
  const firebase = {
    db: {
      collection: () => ({
        get: jest.fn().mockResolvedValue(results)
      })
    }
  };
  beforeEach(() => {});

  afterEach(cleanup);

  it("loads metrics from firestore", async () => {
    const { getAllByTestId } = render(<MetricsList firebase={firebase} />);
    await waitForElement(() => getAllByTestId("metrics"));
    expect(getAllByTestId("metrics").length).toEqual(data.length);
  });

  xit("updates the water done date", () => {
    const { getByTestId } = render(<MetricsList firebase={firebase} />);
    fireEvent.click(getByTestId("water"));
    expect(getByTestId("waterDone").innerHTML).toEqual("01/05");
  });
});
