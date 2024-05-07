import React from "react";
import pizza1 from "../assets/pizza-images/pizza1.jpg";
import pizza2 from "../assets/pizza-images/pizza2.jpg";
import pizza3 from "../assets/pizza-images/pizza3.jpg";
import pizza4 from "../assets/pizza-images/pizza4.jpg";
import pizza5 from "../assets/pizza-images/pizza5.jpg";
import useLocalStorage from "../hooks/useLocalStorage";

type MenuProviderProps = {
  children: React.ReactNode;
};

type MenuContextProps = {
  menuItems: MenuItemProps[];
  incrementNumOfOrders: (id: string) => void;
  decrementNumOfOrders: (id: string) => void;
  removeAllOrdersFromItem: (id: string) => void;
  getNumOfOrders: () => number;
  getCartItems: () => MenuItemProps[];
  getSumOfAllOrders: () => number;
  showSidePanel: boolean;
  setShowSidePanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuItemProps = {
  image: string;
  price: number;
  name: string;
  id: string;
  quantity: number;
};

export const MenuContext = React.createContext({} as MenuContextProps);

export default function MenuProvider({ children }: MenuProviderProps) {
  const [showSidePanel, setShowSidePanel] = React.useState(false);
  const [menuItems, setMenuItems] = useLocalStorage<MenuItemProps[]>("menu", [
    {
      image: pizza1,
      price: 10,
      name: "Margarita",
      id: "1",
      quantity: 0,
    },
    {
      image: pizza2,
      price: 25,
      name: "Pepperoni",
      id: "2",
      quantity: 0,
    },
    {
      image: pizza3,
      price: 15,
      name: "Chicago",
      id: "3",
      quantity: 0,
    },
    {
      image: pizza4,
      price: 25,
      name: "Vegetarian",
      id: "4",
      quantity: 0,
    },
    {
      image: pizza5,
      price: 30,
      name: "Greek",
      id: "5",
      quantity: 0,
    },
  ]);

  function getCartItems() {
    return menuItems.filter((item) => item.quantity > 0);
  }

  function incrementNumOfOrders(id: string) {
    setMenuItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }

  function decrementNumOfOrders(id: string) {
    setMenuItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          if (item.quantity === 0) {
            alert("can't go below 0");
            return item;
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      });
    });
  }

  function removeAllOrdersFromItem(id: string) {
    setMenuItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: 0 };
        } else {
          return item;
        }
      });
    });
  }

  function getNumOfOrders() {
    return menuItems.reduce((acc, currentValue) => {
      return acc + currentValue.quantity;
    }, 0);
  }

  function getSumOfAllOrders() {
    return menuItems.reduce((acc, currentValue) => {
      return acc + currentValue.price * currentValue.quantity;
    }, 0);
  }

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        incrementNumOfOrders,
        decrementNumOfOrders,
        removeAllOrdersFromItem,
        getNumOfOrders,
        showSidePanel,
        setShowSidePanel,
        getCartItems,
        getSumOfAllOrders,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
