import React, { FC } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
/* import { Payload } from "recharts/types/component/DefaultLegendContent"; */
import { Props } from "./NetIncome.container";

const NetIncomeWidget: FC<Props> = ({ className, data }) => {
  return (
    <div
      className={[className, "col-span-full sm:col-span-6 widget-base"].join(
        " "
      )}
    >
      <ResponsiveContainer
        height="100%"
        width="100%"
        minHeight={150}
        debounce={300}
      >
        <ComposedChart
          data={data}
          stackOffset="sign"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Area
            type="monotone"
            dataKey="income"
            fill="#8884d8"
            stroke="#8884d8"
            opacity={0.5}
          />
          <Area
            type="monotone"
            dataKey="expense"
            fill="#8884d8"
            stroke="#8884d8"
            opacity={0.5}
          />
          <Bar
            name="Income"
            dataKey="income"
            barSize={20}
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            name="Expense"
            dataKey="expense"
            barSize={20}
            stackId="a"
            fill="#811c1c"
          />
          <Legend
            content={(props) => {
              const { payload } = props;

              return (
                <ul className="flex items-center justify-center p-0 m-0">
                  {/* {(payload as Payload[]).map((entry, index) => { */}
                  {/*   return entry.type !== "rect" ? null : ( */}
                  {/*     <li */}
                  {/*       key={`item-${index}`} */}
                  {/*       className="flex items-center m-3 gap-3" */}
                  {/*     > */}
                  {/*       <svg width={14} height={14}> */}
                  {/*         <rect width={20} height={20} fill={entry.color} /> */}
                  {/*       </svg> */}
                  {/*       <span style={{ color: entry.color }}> */}
                  {/*         {entry.value} */}
                  {/*       </span> */}
                  {/*     </li> */}
                  {/*   ); */}
                  {/* })} */}
                </ul>
              );
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NetIncomeWidget;
