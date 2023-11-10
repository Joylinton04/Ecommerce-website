import { React } from 'react';
import { useSwiper } from 'swiper/react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SwiperButton = () => {
    const swiper = useSwiper();

  return (
    <div className="absolute top-1/2">
        <button onClick={() => swiper.slideNext()} className="p-2 rounded-full w-16 h-16 bg-slate-200"><ArrowRightAltIcon fontSize="large"/></button>
    </div>
  )
}

export default SwiperButton