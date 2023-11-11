import {FaShoppingBag} from 'react-icons/fa'
import PurchaseCard from '../layout/PurchaseCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext,useState,useEffect } from "react";
import { DataContext } from "../utils/contextApi";
import CartIcon from '../assets/cart4.png'
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from "../hook/useLocalStorage";

const Purchase = () => {
    const [searchResult,setSearchResult] = useState([])
    const { cart, setCart } = useContext(DataContext)
    const [searchParams, setSearchParams] = useSearchParams({search: ""})
    const search = searchParams.get("search")
    //const { getItem,removeItem,setItem } = useLocalStorage('cart')

    const handleRemoveFromCart = (id) => {
        setCart((prevCart)=> {
            return prevCart.filter((cart) => cart.id !== id)
        })
        //removeItem()
    }

    useEffect(() => {
        const filteredResult = cart.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).reverse()
        setSearchResult(filteredResult);
      }, [cart, search]);



  return (

    <div className='min-h-screen mb-20 mt-6'>
        <div className='flex flex-row md:flex-col'>
            <div className='w-[600px] md:w-full flex flex-col items-center rounded-3xl px-4'>
                <div className='sticky top-10 md:h-full mt-10'>
                    <div className='h-[400px] w-full bg-slate-200 rounded-3xl'>
                        <img src={CartIcon} alt="" className='h-full w-full object-cover animate3'/>
                    </div>
                    <div className='p-2 flex flex-col md:flex-row md:w-full mt-10'>
                        <h1 className='w-full flex gap-1  my-3 text-2xl font-semibold items-center'>Pending: <span className='w-[20px] h-[20px] bg-sky-500 ml-6 p-4 text-white font-semibold rounded-full flex justify-center items-center'>{cart.length}</span></h1>
                        <h1 className='w-full flex gap-1  my-3 text-2xl font-semibold items-center'>Processing: <span className='w-[20px] h-[20px] bg-sky-500 ml-6 p-4 text-white font-semibold rounded-full flex justify-center items-center'>0</span></h1>
                    </div>
                </div>
            </div>
            <div className='w-full h-full border-l p-3'>
                 <div className='flex w-full justify-between p-4 border-b'>
                    <h1>My Cart</h1>
                    <span>Hi,Joy</span>
                 </div>
                 <div>
                    <div className='flex justify-between p-5 md:p-2 md:flex-col cursor-pointer'>
                        <div className='flex flex-col py-6'>
                            <h1 className='text-xl flex items-center gap-4'><span className='font-bold text-3xl'>Cart</span> <span className='bg-[#681f23] text-white p-2 rounded-full'><ShoppingCartIcon/></span></h1>
                            <span className='text-black/40'>Manage and Create a great shopping Experience For you</span>
                        </div>
                        <div>
                            <input 
                                type="search" 
                                value={search}
                                placeholder='search your product name,order id...' 
                                className='w-[200px] border border-black p-2'
                                onChange={(e)=>setSearchParams(
                                    prev => {
                                        prev.set("search", e.target.value)
                                        return prev
                                    },{replace: true}
                                )}/>
                        </div>
                    </div>
                    <main className='bg-black/10 p-3 flex flex-col gap-3 rounded-lg'>
                    {searchResult.length > 0 
                    ? searchResult.map((item) => (
                            <PurchaseCard item={item} key={item.id} handleRemoveFromCart={handleRemoveFromCart}/>
                        ))
                    : <p className='font-bold text-6xl text-center'>Sorry, no item to display </p>    
                       }
                    </main>
                 </div>
            </div>
        </div>
    </div>
    )
  }

export default Purchase;