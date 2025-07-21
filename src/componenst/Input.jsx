const Input = (props) => {
  const { type, name, id, placeholder } = props;
  return (
    <>
      <label htmlFor={id}>
        <div className="font-bold text-xl mb-3 mt-3">{name}</div>
        <input
          className="text-blue-400 px-5 py-3 rounded-lg"
          type={type}
          placeholder={placeholder}
          id={id}
        />
      </label>
    </>
  );
};

export default Input;
