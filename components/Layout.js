import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import { useContext } from 'react';
import { Store } from '../utils/store';


export default function Layout({title,children}) 
{
  const {state ,dispatch}= useContext(Store);
  const {cart} =state;
  return (
  <>
     <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 item-center px-5 justify-between shadow-md'>
            <Link href='/'>
            <a className='text-3xl font-bold'>Amazon</a>
            </Link>
            <div>
              <Link href='/login'>
              <a className='p-2'>Login</a></Link>
              <Link href='/Register'>
              <a className='p-2'>Register</a></Link>
              <Link href='/cart'>
              <a className='p-2'>
              Cart
              {cart.cartItems.length > 0 &&(
                 <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                  {cart.cartItems.reduce((a, c) => a + c.quantity , 0)}
                 </span>
              )}
              </a></Link>
            </div>
          </nav>
        </header>
        <h1 className='text-xl font-bold ml-12 mt-3'>Product</h1>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center item-center shadow-inner font-semibold'>Copyright © Sourabh 2022</footer>
    </div>
</>
  );
}
