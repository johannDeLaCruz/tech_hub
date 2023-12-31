const InputForm = ({ type, placeholder, name, id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
      />
    </>
  );
};

export default InputForm;
