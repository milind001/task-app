import React, { useEffect, useRef } from "react";
import drawChart from "./DrawChart";

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div className="container-chart">
      <div className="graph-chart" ref={ref} />
    </div>
  );
};

export default React.memo(DonutChart);