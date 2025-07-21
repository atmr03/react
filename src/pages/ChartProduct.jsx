import Button from "../componenst/Button";
import Cart from "../layout/Cart";

// belom siap ni bre
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 101.998,
    image: "/public/shoes.jpg",
  },
  {
    id: 1,
    name: "Product 2",
    price: 100.111,
    image: "/public/shoes.jpg",
  },
];

const email = localStorage.getItem("email");

const CartProduct = () => {
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
      {products.map((product) => (
        <Cart>
          <Cart.Header image={product.image} />
          <Cart.Content name={product.name} />
          <Cart.Footer price={product.price} />
        </Cart>
      ))}
    </>
  );
};

export default CartProduct;
