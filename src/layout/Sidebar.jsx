import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { DataContext } from "../utils/contextApi";
import useLocalStorage from "../hook/useLocalStorage";



const Sidebar = ({product}) => {
    const { cart, setCart, setConfirmation } = useContext(DataContext)

    const { setItem } = useLocalStorage('cart')

    const handleAddToCart = () => {
        const existingItem = cart.some((item) => item.id === product.id);
      
        setCart((prevCart) => {
            if (existingItem) {
                return prevCart;
            } else {
                return [...prevCart, product];
            }
        });
    
        setConfirmation(!existingItem);
        setTimeout(() => {
            setConfirmation(false);
        }, 2000);
    };

    useEffect(() => {
        setItem([...cart])
      }, [setItem, cart]);

  return (
    <div className='mt-10 sticky top-10 md:top-0'>
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold 2xl:text-2xl">Product Name</h1>
            <p className="flex items-center 2xl:text-xs"><Link to={`/purchase/${product.id}`}>See full view <span><ArrowRightAltIcon/></span></Link></p>
        </div>
        <div className='mt-20 capitalize bg-slate-200 w-max text-center rounded-full px-4 py-2'>
            <h1><span className='text-lg font-semibold'>Category: </span>shoes</h1>
        </div>
        <div className='mt-8 flex justify-center'>
            <img src={product.image} alt="show" className='rounded-2xl w-80 h-60'/>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>Description</h1>
            <div className='border-2 mt-6 rounded-2xl px-6 py-4'>
                <div>
                    <h1 className='font-semibold'>Product name</h1>
                    <p className='px-4 py-2 rounded-2xl border bg-slate-50 mt-2'>{product.title}</p>
                </div>
                <div className='mt-6'>
                    <h1 className='font-semibold'>Description</h1>
                    <div className='border rounded-2xl h-36 px-4 py-2 overflow-y-auto text-ellipsis mt-2 bg-slate-50'>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>Category && Pricing</h1>
            <div className='border-2 mt-6 rounded-2xl px-6 py-4'>
                <div>
                    <h1 className='font-semibold'>Category</h1>
                    <p className='px-4 py-2 rounded-2xl border w-48 bg-slate-50 mt-2'>{product.category}</p>
                </div>
                <div className='mt-6'>
                    <h1 className='font-semibold'>Pricing</h1>
                    <div className='border rounded-2xl px-4 py-2 mt-2 bg-slate-50'>
                        {product.price}$
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10">
            <button className="py-4 px-4 rounded-lg bg-sky-500 text-white text-lg font-semibold" onClick={() => handleAddToCart()}>Add to cart</button>
        </div>
    </div>
  )
}

export default Sidebar;