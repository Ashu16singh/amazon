import React from "react";
import Layout from "../components/layout";
import Link from "next/link";

export default function RegisterScreen() {
  return (
    <Layout title='Register'>
    <form className='mx-auto max-w-screen-md'>
    <h1 className='mb-6 text-2xl font-bold'>Register</h1>
    <div className='mb-5'>
    <label htmlFor='text'>Full Name</label>
    <input type='text' className='w-full h-10 mt-1 bg-slate-100' placeholder='Enter full name' id='name' autoFocus></input>
    </div>
    <div className='mb-5'>
    <label htmlFor='email'>Email</label>
    <input type='email' className='w-full h-10 mt-1 bg-slate-100' placeholder='Enter e-mail' id='email' autoFocus></input>
    </div>
    <div className='mb-5'>
    <label htmlFor='contact'>Mobile No.</label>
    <input type='number' className='w-full h-10 mt-1 bg-slate-100' placeholder='Enter mobile number' id='contact' autoFocus></input>
    </div>
    <div className='mb-5'>
    <label htmlFor='password'>Password</label>
    <input type='password' className='w-full h-10 mt-1  bg-slate-100 ' placeholder='Enter password' id='password' autoFocus></input>
    </div>
    <div className='mb-5'>
    <button className='primary-button'>Sign Up</button>
    </div>
    <div className='mb-6'>
    Have an account ? &nbsp;
    <Link href='login'>Login</Link>
    </div>
 
        </form>
    </Layout>
  )
}
