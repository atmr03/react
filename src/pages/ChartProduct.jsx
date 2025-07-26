import Cart from "../layout/Cart";
import { useState } from "react";
import Counter from "./Counter";

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
    id: 3,
    name: "Product 3",
    price: 200.111,
    image: "/public/shoes.jpg",
  },
];

const email = localStorage.getItem("email");

const CartProduct = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
              <Cart.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </Cart>
          ))}
        </div>
        <div className="w-1/5">
          <h1>Card</h1>
          <table>
            <thead>
              <tr>
                <th>Produck</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Counter></Counter>
    </>
  );
};

export default CartProduct;
