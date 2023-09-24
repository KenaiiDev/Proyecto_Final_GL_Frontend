import { Container } from 'postcss'
import React from 'react'

export default function Search() {
  return (
    <>
      <div className='flex-1 justify-items-center items-center'>
        <div className='flex m-5'>
          <input
            type='text'
            placeholder='Search for Meowvies'
            className='input input-bordered min-w-full'
          />
        </div>
      </div>
    </>
  )
}
