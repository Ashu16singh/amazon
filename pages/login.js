import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default function LoginScreen() {

  return (
    <Layout title='Login'>
    <form className='mx-auto max-w-screen-md'>
    <h1 className='mb-6 text-2xl font-bold'>Log In</h1>
    <div className='mb-5'>
    <label htmlFor='email'>Email</label>
    <input type='email' className='w-full h-10 mt-1 bg-slate-100' placeholder='Enter e-mail' id='email' autoFocus></input>
    </div>
    <div className='mb-5'>
    <label htmlFor='password'>Password</label>
    <input type='password' className='w-full h-10 mt-1 bg-slate-100 ' placeholder='Enter password' id='password' autoFocus></input>
    </div>
    <div className='mb-5'>
    <button className='primary-button'>Login</button>
    </div>
    <div className='mb-6'>
    Don&apos;t have an account ? &nbsp;
    <Link href='Register'>Register</Link>
    </div>
 
        </form>
    </Layout>
  )
}
