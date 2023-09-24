import { React } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavigationBar() {
  return (
    <nav className=' h-10 navbar bg-black flex-1'>
      <div className='flex-1'>
        <Link href={'/'}>
          <Image
            src={'/assets/meowvies_white.png'}
            alt='Meowvies'
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        <Link href={'/search'}>
          <Image
            src={'/assets/search.svg'}
            alt='Search'
            width={45}
            height={45}
          />
        </Link>
      </div>
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='w-10 rounded-full'>
            <Image src='/assets/user.svg' alt='User' width={45} height={45} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a className='justify-between'>
              Profile
              <span className='badge'>New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
