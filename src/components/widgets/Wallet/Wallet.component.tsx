import React, { FC, useState } from "react";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import DetailsPieActive from "./components/DetailsPieActive";
import GeneralPie from "./components/GeneralPie";
import TotalLabel from "./components/TotalLabel";
import { Props } from "./Wallet.container";

const WalletWidget: FC<Props> = ({ className, generalData, detailsData }) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  return (
    <div className={[className, "widget-base"].join(" ")}>
      <ResponsiveContainer
        height="100%"
        minHeight={150}
        maxHeight={300}
        debounce={300}
      >
        <PieChart>
          <Pie
            data={detailsData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="60%"
            fill="#8884d8"
            activeIndex={activeIndex}
            activeShape={DetailsPieActive}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {activeIndex === undefined ? (
              <Label
                position="center"
                content={({ viewBox }) => <TotalLabel viewBox={viewBox} />}
              />
            ) : null}
          </Pie>
          <Pie
            data={generalData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="63%"
            outerRadius="70%"
            fill="#82ca9d"
            activeIndex={[0, 1]}
            activeShape={GeneralPie}
          >
            <Cell key={`cell-0`} fill="#10b981" />
            <Cell key={`cell-1`} fill="#811c1c" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center w-full m-1">
        <button className="text-white bg-blue-500"> Add transaction </button>
      </div>
    </div>
  );
};

export default WalletWidget;
