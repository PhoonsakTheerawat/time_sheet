import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function Login() {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-bold text-7xl mb-16'>TimeSheet System</h1>

      <form className='flex flex-col items-center w-full max-w-md'>
        <div className='flex flex-col w-full mb-4'>
          <input className='border-2 border-black rounded-xl h-11 placeholder-black w-full' 
            type='email'
            name='email' id='email' placeholder='  Email' />
        </div>

        <div className='flex flex-col w-full mb-4'>
          <div className='relative w-full'>
            <input className='border-2 border-black rounded-xl h-11 placeholder-black w-full' 
              type={visible ? "text" : "password"}
              name='password' id='password' placeholder='  Password' />
            <div className='absolute top-0 right-0 m-2 cursor-pointer'>
              {visible ? <EyeOutlined onClick={() => setVisible(false)} /> : <EyeInvisibleOutlined onClick={() => setVisible(true)} />}
            </div>
          </div>
        </div>

        <div className='flex justify-evenly w-full max-w-md mt-14'>
          <Link className='bg-neutral-900 text-white rounded-3xl px-6 py-2' to='/register'>Register</Link>
          <button className='bg-neutral-900 text-white rounded-3xl px-6 py-2'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
