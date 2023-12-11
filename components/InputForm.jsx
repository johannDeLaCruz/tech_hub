import React from "react";

const InputForm = ({type, placeholder, name, id}) => {
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
        className="w-full rounded-3xl bg-gray-950 text-body2 custom-hover"
      />
    </>
  );
};

export default InputForm;
