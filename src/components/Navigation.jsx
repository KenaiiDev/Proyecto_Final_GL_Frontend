import { React } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavigationBar() {
  return (
    <nav className='h-10'>
      <div className='navbar bg-black'>
        <div className='flex-1'>
          <Link href={'/'}>
            <Image
              src={'/assets/meowvies_white.png'}
              alt='Meowvies'
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div>
          <Image
            src={'/assets/search.svg'}
            alt='Search'
            width={25}
            height={25}
          />
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <div className='w-10 rounded-full'>
              <Image src='/assets/user.svg' alt='User' width={25} height={25} />
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
      </div>
    </nav>
  )
}

export default NavigationBar
