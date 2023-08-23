"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col center-center">
      <PuffLoader size={100} color="#FF5757" />
    </div>
  );
};

export default Loader;
