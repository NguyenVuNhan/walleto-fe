import React, { FC } from "react";

interface Props {
  className?: string;
}

const TransactionWidget: FC<Props> = ({ className }) => {
  return (
    <div
      className={[className, "bg-white col-span-3 rounded-xl p-10"].join(" ")}
    >
      Transaction Widget
    </div>
  );
};

export default TransactionWidget;
