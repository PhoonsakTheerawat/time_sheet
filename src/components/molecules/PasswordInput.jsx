import React, { useState } from 'react';
import Input from '../atoms/Input';
import IconVisible from '../atoms/IconVisible';

const PasswordInput = ({name, placeholder, value, onChange })  => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='relative w-full'>
      <Input type={visible ? 'text' : 'password'} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        />
      <IconVisible visible={visible} onClick={() => setVisible(!visible)} />
    </div>
  );
};

export default PasswordInput;
