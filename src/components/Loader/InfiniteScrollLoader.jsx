import React from "react";
import { PulseLoader } from "react-spinners";

export const InfiniteScrollLoader = () => {
  return (
    <div style={{ position: "relative", textAlign: "center", padding: "3rem" }}>
      {" "}
      <PulseLoader
        cssOverride={{
          position: "absolute",
          inset: "0",
          marginTop:"3rem"
        }}
        color="rgb(57, 176, 255)"
      />
    </div>
  );
};
