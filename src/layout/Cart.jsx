const Cart = (props) => {
  const { children } = props;
  return (
    <div className="w-72 mt-10 mx-auto bg-slate-600 border-green-400 rounded shadow-sm">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <div className="p-5">
      <img className="rounded" src="/public/shoes.jpg" alt="cart-1" />
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <p className="px-5">
        <h1 className="text-white">sepatu lari</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
        dignissimos, in corrupti aliquid nulla a dolore. Vitae maiores ullam,
        officiis a assumenda voluptatem architecto error numquam pariatur neque
        reprehenderit?
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <span className="text-xl text-white">Rp. 100.000</span>
      <button className="p-3 bg-black text-white font-bold rounded-md">
        Buyy
      </button>
    </div>
  );
};

Cart.Header = Header;
Cart.Content = Content;
Cart.Footer = Footer;

export default Cart;
