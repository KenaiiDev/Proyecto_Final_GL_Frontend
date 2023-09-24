import React from 'react'
import Image from 'next/image'

function Carousel() {
  return (
    <>
      <div className='carousel flex max-h-80 max-w-7xl justify-self-center'>
        <div id='item1' className='carousel-item w-full'>
          <Image
            src='/assets/gato.jpg'
            alt='Cat 1'
            width={100}
            height={80}
            className='w-full'
          />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <div className='item'></div>
          <Image
            src='/assets/gato2.jpg'
            alt='Cat 1'
            width={100}
            height={80}
            className='w-full'
          />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <Image
            src='/assets/gato3.jpg'
            alt='Cat 1'
            width={100}
            height={80}
            className='w-full'
          />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
      </div>
    </>
  )
}

export default Carousel
