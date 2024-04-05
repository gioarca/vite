import { CogIcon } from "@heroicons/react/outline";
import React from "react";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl">
      <CogIcon className="items-center transition duration-700 animate-spin m-10 w-10" />
      <p className="flex-col justify-center items-center text-center">
        Caricamento...
      </p>
    </div>
  );
}

export default Loader;
