import React from 'react'
import Carousel from '@/components/Carousel.jsx'
import Card from '@/components/MovieCard.jsx'

export default function PrincipalPage() {
  return (
    <>
      <Carousel />
      <h1 className='font-sans text-5xl font-bold my-3 mx-2 text-purple-400 text-center'>
        TOP 20{' '}
      </h1>
      <section className='flex-1 justify-center '>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}
