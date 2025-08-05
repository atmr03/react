import Cart from "../layout/Cart";
import { useState, useEffect, useRef } from "react";
import Counter from "./Counter";
import { getProduck } from "../services/product.services";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 101.998,
//     image: "/public/shoes.jpg",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 100.111,
//     image: "/public/shoes.jpg",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 200.111,
//     image: "/public/shoes.jpg",
//   },
// ];

const email = localStorage.getItem("email");

const CartProduct = () => {
  const [cart, setCart] = useState([
    // {
    //   id: 1,
    //   qty: 1,
    // },
  ]);
  const [products, setProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

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

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    getProduck((data) => {
      setProducts(data);
    });
  }, []);

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
        <div className="flex flex-wrap w-3/4 gap-5 p-5">
          {products.length > 0 &&
            products.map((product) => (
              <Cart key={product.id}>
                <Cart.Header image={product.image} />
                <Cart.Content name={product.title} />
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        ${" "}
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}

              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    ${" "}
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <Counter></Counter> */}
    </>
  );
};

export default CartProduct;
