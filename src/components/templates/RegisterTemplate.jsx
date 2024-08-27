import React from 'react'
import RegisterFormOrganism from '../organisms/RegisterFormOrganism'

function RegisterTemplate() {
  return (
    <div>
        <div className='flex flex-col items-center mt-20'>
          <h1 className='font-bold text-5xl'>Register</h1>
          <RegisterFormOrganism/>
        </div>
    </div>
  )
}

export default RegisterTemplate