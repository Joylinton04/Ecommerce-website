import ecom from '../assets/ecom.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const homeRef = useRef(null);
    const productsRef = useRef(null);
    const purchaseRef = useRef(null);
    const settingsRef = useRef(null);
    const [activeItem, setActiveItem] = useState(homeRef);

    const handleElementClick = (ref) => {
        if (activeItem) {
            activeItem.current.classList.remove('active');
          }
          ref.current.classList.add('active');
          setActiveItem(ref);
      };

  return (
    <div className='flex justify-between items-center px-6 lg:px-2 cursor-pointer'>
        <div className=' h-20 w-20 flex items-center'>
            <img src={ecom} alt="logo" className='w-full h-full object-cover'/>
            <span className='text-3xl font-semibold' onClick={() => handleElementClick()}>ECOM</span>
        </div>
        <ul className='capitalize flex items-center gap-10 2xl:text-lg text-2xl cursor-pointer 2xl:gap-6'>
            <li ref={homeRef} onClick={() => handleElementClick(homeRef)} className='active'><Link to="/">Home</Link></li>
            <li ref={productsRef} onClick={() => handleElementClick(productsRef)}><Link to="/products">Products</Link></li>
            <li ref={purchaseRef} onClick={() => handleElementClick(purchaseRef)}><Link to='/purchase'>Purchase</Link></li>
            <li ref={settingsRef} onClick={() => handleElementClick(settingsRef)}><Link to='/settings'>Settings</Link></li>
        </ul>
        <div className='flex items-center gap-4'>
            <div className=' bg-slate-200 rounded-full px-4 py-2 lg:py-1 flex items-center'>
                <label htmlFor="cart"><SearchIcon/></label>
                <input type="search" placeholder='Search' id='cart' className='text-base border-none px-4 py-2 lg:py-1 rounded-full bg-transparent'/>
            </div>
            <p className='bg-[#681f23] text-white p-2 rounded-full'><ShoppingCartIcon/></p>
        </div>
    </div>
  )
}

export default Navbar;