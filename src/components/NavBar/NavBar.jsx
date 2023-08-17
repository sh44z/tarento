import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between item-center p-[3rem] '> 
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'><strong>Tarento </strong> Hire </h1>
      </div>

      <div className='menu flex gap-8'>
        <li className='menuList text-greyIsh'>Jobs</li>
        <li className='menuList text-greyIsh'>About Us</li>
        <li className='menuList text-greyIsh'>Contact</li>
        <li className='menuList text-greyIsh'>Blog</li>
        <li className='menuList text-greyIsh'>Login</li>
        <li className='menuList text-greyIsh'>Register</li>

      </div>

    </div>
  )
}

export default NavBar
