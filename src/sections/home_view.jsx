import React from 'react'
import Carousel from '@/components/Carousel'
import Card from '@/components/Cards'

function HomeView() {
  return (
    <>
      <div className='h-10'></div>
      <section className='flex-3 min-w-full '>
        <Carousel />
      </section>
      <h1 className='font-sans text-5xl font-bold my-3 mx-2 text-purple-400 text-center'>
        TOP 20{' '}
      </h1>
      <section className='flex-1 justify-center '>
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default HomeView
