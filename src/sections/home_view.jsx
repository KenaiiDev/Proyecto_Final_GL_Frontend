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
      <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center max-w-full'>
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

export default HomeView
