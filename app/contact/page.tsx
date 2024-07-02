import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Milan Stanojevic",
  description: "Software developer, frontend developer.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact () {
  return (
    <main>
    <div className='min-h-screen max-w-4xl mx-auto flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-neueMontreal font-bold tracking-wider pb-4'>Page is still under construction</h1>
      <p className="font-neueMontreal text-xl tracking-wider">I am working hard to bring this content to you soon. Stay tuned!</p>
    </div>
  </main>
  )
}
