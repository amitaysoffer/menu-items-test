import Cart from "./Cart";
import PageLayout from "./PageLayout";

export default function Navbar() {
  return (
    <div className="py-8 bg-gray-100">
      <PageLayout>
        <div className="flex justify-between">
          <nav>
            <ul className="flex gap-6">
              <li>Home</li>
              <li>Menu</li>
              <li>About</li>
            </ul>
          </nav>
          <div>
            {/* <h3 className="text-lg">Cart Circle</h3> */}
            <Cart />
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
