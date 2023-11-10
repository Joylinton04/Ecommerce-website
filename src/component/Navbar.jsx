import ecom from '../assets/ecom.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6'>
        <div className=' h-20 w-20 flex items-center'>
            <img src={ecom} alt="logo" className='w-full h-full object-cover'/>
            <span className='text-3xl font-semibold'>ECOM</span>
        </div>
        <ul className='capitalize flex items-center gap-10 lg:text-lg text-2xl cursor-pointer'>
            <li>home</li>
            <li>Products</li>
            <li>Purchase</li>
            <li>settings</li>
        </ul>
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