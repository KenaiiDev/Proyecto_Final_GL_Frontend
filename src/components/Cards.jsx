import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <>
      <article className='min-w-30 max-w-xs'>
        <Link href={'/movieinfo'} className='min-w-30 max-w-xs'>
          <div className='card min-w-30 max-w-xs bg-base-100 shadow-xl image-full m-5'>
            <figure className='w-25'>
              <Image
                src='/assets/gatito.jpg'
                width={500}
                height={500}
                alt='cat'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Title</h2>
              <p>Synopsis</p>
            </div>
          </div>
        </Link>
      </article>
    </>
  )
}

export default Card
