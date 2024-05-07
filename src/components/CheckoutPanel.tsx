import React from "react";
import { MenuContext } from "../context/MenuContext";

export default function CheckoutPanel({
  children,
  dismissible = true,
}: {
  children?: React.ReactNode;
  dismissible?: boolean;
}) {
  const {
    setShowSidePanel,
    getCartItems,
    removeAllOrdersFromItem,
    getSumOfAllOrders,
  } = React.useContext(MenuContext);
  const cartItems = getCartItems();
  const sumOfOrders = getSumOfAllOrders();

  if (cartItems.length === 0) {
    setShowSidePanel(false);
  }

  React.useEffect(() => {
    function keyDownEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowSidePanel(false);
      }
    }

    window.addEventListener("keydown", keyDownEsc);

    return () => {
      window.removeEventListener("keydown", keyDownEsc);
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        className="backdrop"
        onClick={dismissible ? () => setShowSidePanel(false) : undefined}
      />
      <div className="h-screen fixed right-0 top-0 w-[400px] bg-white rounded-sm p-5">
        <div className="flex justify-between">
          <h2 className="text-xl">
            <h1>Order</h1>
          </h2>
          <button
            className="text-xl text-gray-500"
            onClick={dismissible ? () => setShowSidePanel(false) : undefined}
          >
            X
          </button>
          {children}
        </div>
        <ul className="divide-y-2">
          {cartItems.map((item) => (
            <li className="flex justify-between items-center py-2">
              <img
                src={item.image}
                alt={item.image}
                className="rounded-t-md w-24 h-24 object-cover "
              />
              <div>
                <div>{item.name}</div>
                <div>orders: {item.quantity}</div>
              </div>
              <div>total: ${item.price * item.quantity}</div>
              <button
                className="border-2 p-1 text-red-500"
                onClick={() => removeAllOrdersFromItem(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-xl">Total Order: {sumOfOrders} </div>
      </div>
    </div>
  );
}
