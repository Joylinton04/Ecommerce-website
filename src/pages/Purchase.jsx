import skincare from '../assets/skincare.png'
import SwiperButton from '../component/SwiperButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const Purchase = () => {
  return (
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
    </div>
  )
}

export default Purchase;

/* <div className="px-6 py-4 h-[60vh] flex relative -z-10">
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
    </div> */