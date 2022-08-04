import React from "react";
import Moment from "react-moment";

import Videos from "../Videos";

const Home = () => {
  return (
    <>
      <Moment toNow>{new Date("1976-04-19T12:59-0500")}</Moment>
      <Videos />
    </>
  );
};

export default Home;
