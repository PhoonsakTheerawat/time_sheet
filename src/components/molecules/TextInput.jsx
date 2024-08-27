import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

function TextInput({text,type,name,placeholder,value, onChange,pattern,maxLength}) {
  return (
    <div className="flex border-4 w-1/3">
      <Label text={text} />
      <Input type={type} name={name} placeholder={placeholder} value={value} 
    onChange={onChange} pattern={pattern} maxLength={maxLength}/>
    </div>
  );
}

export default TextInput;
