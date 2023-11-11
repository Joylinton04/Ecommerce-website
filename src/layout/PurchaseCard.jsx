import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const PurchaseCard = ({item, handleRemoveFromCart}) => {

  return (
    <div className='flex flex-col gap-3 bg-white p-5 shadow-md md:p-2'>
        <div className='flex justify-between p-2 border-b'>
                <span>TO PAY</span>
                <span>pending <ErrorOutlineIcon /></span>
        </div>
        <div className='flex justify-between items-center p-5 border-b md:p-2'>
                <div className='flex items-center gap-4'>
                    <div className='float-left w-52 h-52 rounded-2xl flex justify-center items-center bg-slate-100 border'>
                        <img src={item.image} alt="" className='w-[90%] h-[90%] object-cover rounded-2xl'/>
                    </div>
                    <div className='float-left w-1/2'>
                        <span className='text-black/40 uppercase'></span>
                        <h1 className='font-semibold uppercase text-2xl'>{item.title}</h1>
                        <span className='font-xl uppercase text-xs'>{item.description}</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm text-black/50'>ITEM: 1</span>
                    <span className='font-bold'>${item.price}</span>
                </div>
        </div>
        <div className='flex justify-between items-center md:px-4'>
                <div className='flex flex-col gap-1'>
                    <p className='underline pb-3'>VIEW ORDER DETAILS</p>
                    <button className='border p-1 md:p-0'>Chat with customer support</button>
                    <p className='text-black/60'>pay now before the product expires on sale</p> 
                </div>
                <div className='h-full flex flex-col gap-3'>
                    <span>Order Total: ${item.price}</span>
                    <div className='flex gap-2'>
                        <button className='border py-2 md:py-1 px-4 bg-green-500 text-white font-medium uppercase'>pay now</button>
                        <button className='border py-2 md:py-1 px-4 bg-red-500 text-white font-medium uppercase' onClick={() => handleRemoveFromCart(item.id)}>remove from cart</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default PurchaseCard;