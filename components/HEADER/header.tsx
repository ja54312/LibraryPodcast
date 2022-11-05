import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/'>
          <div className='container-Name-Header'>
            Library Podcast
          </div>
        </Link>
        <div className='container-Loader-Header'>
          Loader
        </div>
      </nav>
    </header>
  )
}

export default Header