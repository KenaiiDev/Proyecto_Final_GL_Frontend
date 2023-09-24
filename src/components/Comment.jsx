import React from 'react'
import Image from 'next/image'

function Comment() {
  return (
    <>
      <div className='rating'>
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          checked
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
        />
      </div>
      <div className='avatar'>
        <div className='w-24 rounded'>
          <Image src='/assets/gatito.jpg' alt='cat' width={500} height={500} />
        </div>
        <h1 className='mx-10'>Usuario</h1>
        <p className=''>Comment</p>
      </div>
    </>
  )
}

export default Comment