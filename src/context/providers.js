// import React, { useState, useEffect, useContext } from "react";
import React from "react";

import { RaiseTicketContext } from ".";

import { getData } from "../common";

export const GetSelectedTeam = (props) => {
  let apiParams = {
    endPoint: "/sample-data",
    type: "GET",
  };

  const sampleData = getData(apiParams);
  console.log("GetSelectedTeam ~ sampleData", sampleData);

  return (
    <RaiseTicketContext.Provider
      value={{
        data: sampleData,
      }}
    >
      {props.children}
    </RaiseTicketContext.Provider>
  );
};
