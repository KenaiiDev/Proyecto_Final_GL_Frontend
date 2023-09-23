import { React } from 'react'
import Image from 'next/image'
import Logo from '@/assets/png_white_meowvies.png'
import Search from '@/assets/search-alt-2-svgrepo-com.svg'
import User from '@/assets/user-svgrepo-com.svg'

function NavigationBar() {
  return (
    <nav className='bg-black p-1 flex justify-between items-center'>
      <div className='flex space-x-'>
        <Image src={Logo} alt={'Meowvies'} width={55} height={55} />
      </div>
      <div className='flex'>
        <Image
          className='fill-white'
          src={Search}
          alt={'Search'}
          width={45}
          height={45}
        />
        <Image src={User} alt={'username'} width={45} height={45} />
      </div>
    </nav>
  )
}

export default NavigationBar
