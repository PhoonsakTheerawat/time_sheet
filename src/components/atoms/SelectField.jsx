import React from "react";
import Select from "react-select";

function SelectField({ name, options, value, onChange}) {
  return (
    <Select
      className="text-md border-2 border-black rounded-xl px-2 w-full"
      name={name}
      options={options}
      value={value}
      onChange={onChange}
    />
  );
}

export default SelectField;
