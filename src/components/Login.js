import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn,SetIsSignIn] = useState(true);

    const toggleSignInForm = () =>{
        SetIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>

        <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        alt="bg-img"  />
        </div>
        <form className='w-4/12 bg-black  absolute px-12 py-6  my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>{isSignIn ? "Sign In":"Sign Up"}</h1>
            {!isSignIn &&(
                <input type='text' placeholder='Enter Your Name' className='p-4 my-2 w-full bg-gray-600'/>
            )}
            <input type="email" placeholder='Enter Your Email' className='p-4 my-2 w-full bg-gray-600 ' />
            <input type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-600 '/>
            <button className='bg-red-700 w-full p-4 my-5 rounded-sm' >{isSignIn ? "Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now":"Already Registred? Sign In Now"}</p>
        </form>

    </div>
  )
}

export default Login