"use client";
import ClipLoader from "react-spinners/CircleLoader";

interface loadingPage {
  loading: boolean;
}

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }: loadingPage) {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      arial-label="Loading Spinner"
    />
  );
}

export default Spinner;
