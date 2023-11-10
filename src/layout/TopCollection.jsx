import useFetch from "../hook/useFetch";
import Loading from "../component/Loading";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';


const TopCollection = () => {
    const { data,isLoading, fetchError } = useFetch()
    const [topCollection, setTopCollection] = useState([])

    useEffect(() => {
        setTopCollection(data.slice(0,3))
    },[data])



  return (
    <div>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            >
            {isLoading && <Loading/>}
            {!fetchError && !isLoading && topCollection.length && 
                topCollection.map((top) => (
                    <SwiperSlide className='pb-4 h-[60vh]' key={top.id}>
                        <div className="px-6 py-4 flex relative -z-10 h-full">
                            <div className=" w-3/5 h-full bg-[#681f23] rounded-t-3xl flex flex-col items-center justify-around text-white px-6">
                                <h1 className="text-5xl font-semibold">{top.title}</h1>
                                <div className="flex items-center gap-10 w-2/3 lg:w-full">
                                    <p className="">{top.description}</p>
                                    <div>
                                        <button className="bg-white px-4 py-2 text-black text-lg rounded-full w-32">See details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 h-full rounded-t-3xl flex justify-center items-center relative bg-slate-200">
                                <img src={top.image} alt="image" className='w-[80%] h-[80%] object-cover rounded-t-3xl'/>
                                <div className='capitalize absolute bg-white top-[70%] left-10 lg:left-4 px-4 py-2 rounded-lg'>
                                    <h1 className='text-lg font-bold'>{top.title}</h1>
                                    <p><span className='font-bold'>category:</span> {top.category}</p>
                                    <p><span className='font-bold'>Price:</span> {top.price}$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default TopCollection;