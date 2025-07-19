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
const CartProduct = () => {
  return (
    <>
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
