import React from "react";
import { MenuContext } from "../context/MenuContext";

export default function Cart() {
  const { getNumOfOrders, setShowSidePanel } = React.useContext(MenuContext);
  const numOfOrders = getNumOfOrders();

  return (
    <button
      onClick={() => setShowSidePanel(true)}
      disabled={numOfOrders === 0}
      className={`relative outline-none bg-transparent rounded-full outline-gray-500 w-12 h-12 ${
        numOfOrders === 0 ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className="translate-y-1/4 translate-x-1/4 absolute flex justify-center items-center right-0 bottom-0 bg-red-500 rounded-full h-8 w-8 text-white">
        {numOfOrders}
      </div>
    </button>
  );
}
