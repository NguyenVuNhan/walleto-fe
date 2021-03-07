import React, { FC } from "react";
import { PolarViewBox, ViewBox } from "recharts/types/util/types";

interface Props {
  viewBox?: ViewBox;
}

const TotalLabel: FC<Props> = ({ viewBox }) => {
  const { cx, cy } = viewBox as PolarViewBox;
  return (
    <text
      x={cx}
      y={cy}
      fill="#3d405c"
      dominantBaseline="central"
      textAnchor="middle"
      className="recharts-text recharts-label"
    >
      <tspan y={cy as number} alignmentBaseline="middle" fontSize="26">
        Total
      </tspan>
      <tspan x={cx as number} y={(cy as number) + 20} fontSize="14">
        1000
      </tspan>
    </text>
  );
};

export default TotalLabel;
