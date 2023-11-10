<<<<<<< HEAD


import {FaShoppingBag} from 'react-icons/fa'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
/* =======
import skincare from '../assets/skincare.png'
import SwiperButton from '../component/SwiperButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
>>>>>>> 51f9b8ac8bd286ab20791c788b4396919af98e06
 */
=======


>>>>>>> 468777e3eaf605f81c8cce767023efd8567adacd
const Purchase = () => {
  return (
<<<<<<< HEAD

    <div className='h-full'>
        <div className='flex flex-row md:flex-col'>
            <div className='w-[600px] md:w-full flex flex-col items-center'>
                <div className='block pb-4 border-b md:hidden'>
                   <FaShoppingBag size={40} />
                </div>
                <div className='p-2 flex flex-col md:flex-row md:w-full'>
                    <h1 className='w-full flex gap-1  my-3 text-xl items-center'>Pending <span className='w-[20px] h-[20px] bg-red-500 text-white font-semibold rounded-full flex justify-center items-center'>3</span></h1>
                    <h1 className='w-full flex gap-1  my-3 text-xl items-center'>Processing <span className='w-[20px] h-[20px] bg-red-500 text-white font-semibold rounded-full flex justify-center items-center'>5</span></h1>
                    <h1 className='w-full flex gap-1  my-3 text-xl items-center'>confirmed <span className='w-[20px] h-[20px] bg-red-500 text-white font-semibold rounded-full flex justify-center items-center'>9</span></h1>
                </div>
            </div>
            <div className='w-full h-full border-l p-3'>
                 <div className='flex w-full justify-between p-4 border-b'>
                    <h1>My Purchase</h1>
                    <span>Hi,Joy</span>
                 </div>

                 <div>
                    <div className='flex justify-between items-center p-5 md:p-2 md:flex-col'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>Purchase History</h1>
                            <span className='text-black/40'>Manage and Create a great shopping Experience For you</span>
                        </div>
                        <div>
                            <input type="search" placeholder='search your product name,order id...' className='w-[200px] border border-black p-2'/>
                        </div>
                    </div>
                    <main className='bg-black/10 p-3 flex flex-col gap-3'>
                       { 
                        items.map((item) => (
                            <div className='flex flex-col gap-3 bg-white p-5 shadow-md md:p-2'>
                            <div className='flex justify-between p-2 border-b'>
                                <span>TO PAY</span>
                                <span>pending <ErrorOutlineIcon /></span>
                            </div>
                            <div className='flex justify-between items-center p-5 border-b md:p-2'>
                                <div className='flex items-center gap-2'>
                                    <div className='float-left w-[100px] h-[100px] md:w-[70px] md:h-[70px] flex justify-center items-center text-[3rem] md:text-[2rem] border'>{item.img}</div>
                                    <div className='float-left'>
                                        <span className='text-black/40 uppercase'>{item.name}</span>
                                        <h1 className='font-xl md:text-sm uppercase'>Lorem ipsum dolor sit amet.</h1>
                                        <span className='font-xl md:text-sm uppercase'>size 10</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-sm text-black/50'>ITEM: 1</span>
                                    <span className='font-bold'>$75.00</span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center md:flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <p className='underline pb-3'>VIEW ORDER DETAILS</p>
                                    <button className='border p-1 md:p-0'>Chat with customer support</button>
                                    <p className='text-black/60'>pay now before the product expires on sale</p> 
                                </div>
                                <div className='h-full flex flex-col gap-3'>
                                    <span>Order Total: $81.00</span>

                                    <button className='border py-2 md:py-1 bg-red-500 text-white font-medium'>PAY NOW</button>
                                </div>
                            </div>
                        </div>
                        ))
                       }
                    </main>
                 </div>
            </div>
        </div>
    </div>
    )
  }
    /*
=======
    <div className='overflow-y-auto h-screen'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className=''
            >
            <SwiperSlide>
                 <div className="px-6 py-4 h-[60vh] flex relative -z-10">
                    <div className=" w-3/5 h-full bg-[#681f23] rounded-t-3xl flex flex-col items-center justify-around text-white">
                        <h1 className="text-7xl font-semibold">Collection Beauty</h1>
                        <div className="flex items-center gap-10 w-2/3">
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio accusantium in officia provident odit aliquam eaque dicta incidunt reprehenderit inventore quaerat doloremque, doloribus exercitationem sit. Maxime expedita a quia!</p>
                            <div>
                                <button className="bg-white px-4 py-2 text-black text-lg rounded-full w-32">See details</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-2/5 h-full rounded-t-3xl border-2 relative">
                        <img src={skincare} alt="" className='w-full h-full object-cover rounded-t-3xl'/>
                        <div className='capitalize absolute bg-white top-[70%] left-20 px-4 py-2 rounded-lg'>
                            <h1 className='text-lg'>Skincare</h1>
                            <p><span className='font-bold'>category:</span> Lotion</p>
                            <p><span className='font-bold'>Price:</span> 499$</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
*/
    
=======
    <div>
        
    </div>
  )
}
>>>>>>> 468777e3eaf605f81c8cce767023efd8567adacd

export default Purchase;