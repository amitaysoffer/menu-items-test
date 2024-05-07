import React from "react";
import MenuItemsList from "./components/MenuItemsList";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";
import { MenuContext } from "./context/MenuContext";
import CheckoutPanel from "./components/CheckoutPanel";

export default function App() {
  const { showSidePanel } = React.useContext(MenuContext);
  return (
    <div className="h-screen bg-gray-200">
      <Navbar />
      <PageLayout>
        {showSidePanel && <CheckoutPanel />}

        <main>
          <h1 className="text-5xl my-5 text-center">Menu</h1>
          <MenuItemsList />
        </main>
      </PageLayout>
    </div>
  );
}
