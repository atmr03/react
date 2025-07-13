const Button = (props) => {
  const { name } = props;
  return (
    <button className="block mx-auto w-56 mb-3 mt-3 h-10 px-6 font-semibold rounded-md bg-black text-white">
      {name}
    </button>
  );
};

export default Button;
