import React from "react";
import { MenuContext, MenuItemProps } from "../context/MenuContext";

export default function MenuItem({
  image,
  price,
  name,
  id,
  quantity,
}: MenuItemProps) {
  const {
    incrementNumOfOrders,
    decrementNumOfOrders,
    removeAllOrdersFromItem,
  } = React.useContext(MenuContext);

  return (
    <div className="w-full h-full">
      <img
        src={image}
        alt="pizza1"
        className="rounded-t-md h-[200px] object-cover w-full"
      />
      <div className="px-4 py-6 bg-white rounded-b-md shadow-lg">
        <div className="flex justify-between">
          <h3 className="text-2xl">{name}</h3>
          <h3>${price}</h3>
        </div>
        <div className="flex justify-center gap-3 items-center">
          <button
            className="text-3xl bg-blue-500 text-white p-1 rounded-full"
            onClick={() => incrementNumOfOrders(id)}
          >
            +
          </button>
          <div>
            <span className="bold text-2xl">{quantity}</span> item ordered
          </div>
          <button
            className="text-3xl bg-blue-500 text-white p-1 rounded-full"
            onClick={() => decrementNumOfOrders(id)}
          >
            -
          </button>
        </div>
        <button
          onClick={() => removeAllOrdersFromItem(id)}
          className="bg-red-500 text-white px-4 rounded-md py-2 block mx-auto mt-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
