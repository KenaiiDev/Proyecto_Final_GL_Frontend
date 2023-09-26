import React from 'react';
import Image from 'next/image';

function Carousel() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='carousel max-h-30 max-w-8xl w-full'>
        <div id='item1' className='carousel-item w-full relative'>
          <Image
            src='/assets/gato.jpg'
            alt='Cat 1'
            width={2000}
            height={2000}
            className='w-full'

          />
        </div>
        <div id='item2' className='carousel-item w-full relative'>
          <Image
            src='/assets/gato2.jpg'
            alt='Cat 1'
            width={2000}
            height={2000}
            className='w-full'
          />
        </div>
        <div id='item3' className='carousel-item w-full relative'>
          <Image
            src='/assets/gato3.jpg'
            alt='Cat 1'
            width={2000}
            height={2000}
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
    </div>
  );
}

export default Carousel;
