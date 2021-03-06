import React, { FC } from "react";
import Header from "src/components/organisms/Header";

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <div className="w-screen h-screen">
      <Header />
    </div>
  );
};

export default Home;
