import Cart from "../layout/Cart";

// belom siap ni bre
const product = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: "/public/shoes.jpg",
  },
];
const CartProduct = () => {
  return (
    <>
      <Cart>
        <Cart.Header />
        <Cart.Content />
        <Cart.Footer />
      </Cart>
    </>
  );
};

export default CartProduct;
