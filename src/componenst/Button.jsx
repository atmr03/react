const Button = (props) => {
  const { nama, onClick = () => {}, type = "button" } = props;
  return (
    <button
      onClick={() => onClick()}
      className="block mx-auto w-56 mb-3 mt-3 h-10 px-6 font-semibold rounded-md bg-black text-white"
      type={type}
    >
      {nama}
    </button>
  );
};

export default Button;
