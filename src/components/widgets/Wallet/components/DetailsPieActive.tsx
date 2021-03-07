import React from "react";
import { Sector } from "recharts";

const DetailsPieActive = ({
  cx,
  cy,
  fill,
  payload,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  value,
  percent,
}: any) => {
  return (
    <g>
      <text x={cx} y={cy - 18} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
        <tspan x={cx} y={cy + 10}>
          {`${value}`}
        </tspan>
        <tspan x={cx} y={cy + 28} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 3}
        outerRadius={outerRadius + 3}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export default DetailsPieActive;
