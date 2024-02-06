import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-4'>
        <Link to={"/"}>
        <img style={{maxWidth:"150px"}} src="/src/logo/logo.png" alt="" />
        </Link>
        
    </header>
  )
}

export default Header