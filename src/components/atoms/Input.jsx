import React from 'react'

function Input({ type, name, placeholder, value, onChange,pattern ,maxLength}) {
  return (
    <input className='border-2 border-black rounded-xl h-9 w-full' 
    type={type} name={name} placeholder={placeholder} value={value} 
    onChange={onChange} pattern={pattern} maxLength={maxLength}/>
  )
}

export default Input