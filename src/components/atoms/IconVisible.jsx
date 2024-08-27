import React from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function IconVisible({ visible, onClick }) {
  return (
    <div className='absolute top-0 right-0 m-2 cursor-pointer' onClick={onClick}>
      {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
    </div>
  )
}

export default IconVisible
