import React from 'react'

function Button({ type = 'button', label, onClick }) {
  return (
    <button 
      className='bg-neutral-900 text-white rounded-3xl px-6 py-2' 
      type={type} 
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button