import React from 'react'
import Card from '@/components/MovieCard'

export default function Search() {
  return (
    <>
      <div className='h-10'></div>
      <section className='flex-1 justify-items-center items-center'>
        <div className='flex m-5'>
          <input
            type='text'
            placeholder='Search for Meowvies'
            className='input input-bordered min-w-full my-7'
          />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}
