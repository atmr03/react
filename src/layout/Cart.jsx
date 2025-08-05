import Button from "../componenst/Button";
const Cart = (props) => {
  const { children } = props;
  return (
    <div className="w-72 mt-10 bg-slate-600 border-green-400 rounded shadow-sm">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="p-5">
      <img
        className="rounded h-60 w-full object-cover"
        src={image}
        alt="cart-1"
      />
    </div>
  );
};

const Content = (props) => {
  const { name } = props;
  return (
    <div>
      <div className="px-5 ">
        <h1 className="text-white h-full tracking-tight">
          {name.substring(0, 10)}...
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
        dignissimos, in corrupti aliquid nulla a dolore. Vitae maiores ullam,
        officiis a assumenda voluptatem architecto error numquam pariatur neque
        reprehenderit?
      </div>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between p-5">
      <span className="text-xl text-white">
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        onClick={() => handleAddToCart(id)}
        className="p-3 bg-black text-white font-bold rounded-md"
        nama={"buy"}
      ></Button>
    </div>
  );
};

Cart.Header = Header;
Cart.Content = Content;
Cart.Footer = Footer;

export default Cart;
