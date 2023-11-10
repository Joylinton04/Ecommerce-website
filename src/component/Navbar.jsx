import ecom from '../assets/ecom.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
<<<<<<< HEAD

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
/* =======
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 51f9b8ac8bd286ab20791c788b4396919af98e06
 */
=======
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

>>>>>>> 468777e3eaf605f81c8cce767023efd8567adacd
const Navbar = () => {
    

  return (
    <div className='flex justify-between items-center px-6 cursor-pointer'>
        <div className=' h-20 w-20 flex items-center'>
            <img src={ecom} alt="logo" className='w-full h-full object-cover'/>
<<<<<<< HEAD
            <span className='text-3xl font-semibold block md:hidden'>ECOM</span>
        </div>
        <div className='block md:hidden'>
            <ul className='capitalize flex items-center gap-10 lg:text-lg text-2xl cursor-pointer'>
                <NavLink to='/'>home</NavLink>
                <NavLink>Products</NavLink>
                <NavLink to='/purchase'>Purchase</NavLink>
                <NavLink>settings</NavLink>
            </ul>
        </div>

           {/*  <span className='text-3xl font-semibold' onClick={() => handleElementClick()}>ECOM</span>
=======
            <span className='text-3xl font-semibold' onClick={() => handleElementClick()}>ECOM</span>
>>>>>>> 468777e3eaf605f81c8cce767023efd8567adacd
        </div>
        <ul className='capitalize flex items-center gap-10 lg:text-lg text-2xl cursor-pointer'>
            <li ref={homeRef} onClick={() => handleElementClick(homeRef)} className='active'><Link to="/">Home</Link></li>
            <li ref={productsRef} onClick={() => handleElementClick(productsRef)}><Link to="/products">Products</Link></li>
            <li ref={purchaseRef} onClick={() => handleElementClick(purchaseRef)}><Link to='/purhase'>Purchase</Link></li>
            <li ref={settingsRef} onClick={() => handleElementClick(settingsRef)}><Link to='/settings'>Settings</Link></li>
        </ul>
<<<<<<< HEAD
 */}
=======
>>>>>>> 468777e3eaf605f81c8cce767023efd8567adacd
        <div className='flex items-center gap-4'>
            <div className=' bg-slate-200 rounded-full px-4 py-2 flex items-center'>
                <label htmlFor="cart"><SearchIcon/></label>
                <input type="search" placeholder='Search' id='cart' className='text-base border-none px-4 py-2 rounded-full bg-transparent'/>
            </div>
            <p className='bg-[#681f23] text-white p-2 rounded-full'><ShoppingCartIcon/></p>
        </div>
    </div>
  )
}

export default Navbar;