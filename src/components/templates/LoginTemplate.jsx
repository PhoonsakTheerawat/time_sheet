import React from 'react';
import LoginFormOrganism from '../organisms/LoginFormOrganism';

function LoginTemplate() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-bold text-7xl mb-16'>TimeSheet System</h1>
      <LoginFormOrganism />
    </div>
  )
}

export default LoginTemplate
