import Cart from "../layout/Cart";
import { useState } from "react";

// belom siap ni bre
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 101.998,
    image: "/public/shoes.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 100.111,
    image: "/public/shoes.jpg",
  },
  {
    id: 2,
    name: "Product 3",
    price: 200.111,
    image: "/public/shoes.jpg",
  },
];

const email = localStorage.getItem("email");

const CartProduct = () => {
  const [cart, setCart] = useState([
    {
      name: "Sepatu Lama",
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end text-white px-10 bg-blue-600 h-20 items-center gap-5">
        {email}
        <button
          className="bg-black text-white font-bold p-2 rounded-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex">
        <div className="w-4/5 flex flex-wrap gap-5 p-5">
          {products.map((product) => (
            <Cart key={product.id}>
              <Cart.Header image={product.image} />
              <Cart.Content name={product.name} />
              <Cart.Footer price={product.price} />
            </Cart>
          ))}
        </div>
        <div className="w-1/5">
          <h1>Card</h1>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
