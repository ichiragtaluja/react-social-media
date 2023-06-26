import React from "react";
import { PulseLoader } from "react-spinners";
import { usePosts } from "../../contexts/PostsProvider";

export const Loader = () => {
  const { postLoading } = usePosts();
  const override = {
    position: "absolute",
    top: "60vh",
    left: "40vw",
  };
  return (
    <PulseLoader
      cssOverride={override}
      loading={postLoading}
      color="rgb(57, 176, 255)"
    />
  );
};
