import ecom from '../assets/ecom.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6'>
        <div className=' h-20 w-20 flex items-center'>
             <button className='hidden md:block'><MenuIcon /></button>
            <img src={ecom} alt="logo" className='w-full h-full object-cover'/>
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
        <div className='flex items-center gap-4'>
            <div className=' bg-slate-200 rounded-full px-4 py-2 flex items-center md:hidden'>
                <label htmlFor="cart"><SearchIcon/></label>
                <input type="search" placeholder='Search' id='cart' className='text-base border-none px-4 py-2 rounded-full bg-transparent'/>
            </div>
            <p className='bg-[#681f23] text-white p-2 rounded-full'><ShoppingCartIcon/></p>
        </div>
    </div>
  )
}

export default Navbar;