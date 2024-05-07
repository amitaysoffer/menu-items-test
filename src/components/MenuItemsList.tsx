import React from "react";
import { MenuContext } from "../context/MenuContext";
import MenuItem from "./MenuItem";

export default function MenuItemsList() {
  const { menuItems } = React.useContext(MenuContext);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {menuItems.map(({ image, price, name, id, quantity }) => (
        <MenuItem
          image={image}
          price={price}
          name={name}
          id={id}
          quantity={quantity}
          key={id}
        />
      ))}
    </div>
  );
}
