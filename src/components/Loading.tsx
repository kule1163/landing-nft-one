import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-tertiary">
      <ClipLoader
        className="block text-primary"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
