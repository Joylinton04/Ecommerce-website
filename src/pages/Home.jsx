import TopCollection from "../layout/TopCollection";
import Category from "../layout/Category";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import ProductCards from "../component/ProductCards";

const Home = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(prevShow => !prevShow)
    }

  return (
    <div className="h-full">
        <TopCollection/>
        <div className=" w-full flex -mt-10 mb-20 bg-white rounded-t-[5rem] py-6 px-8">
            <div className="h-full mt-10" style={show ? {width: '75%'}: {width: '100%'}}>
                <div className="h-full">
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-bold">Products</h1>
                        <div className=' bg-slate-200 rounded-full px-4 py-2 flex items-center mr-6'>
                            <label htmlFor="cart"><SearchIcon/></label>
                            <input type="search" placeholder='Search' id='cart' className='text-base border-none px-4 py-2 rounded-full bg-transparent'/>
                        </div>
                    </div>
                    <ul className="flex gap-20 items-center text-2xl capitalize cursor-pointer mt-8">
                        <li className="bg-slate-200 py-2 px-4 rounded-full" onClick={()=>handleShow()}>all products</li>
                        <li>Electronics</li>
                        <li>Jewelery</li>
                        <li>men's clothing</li>
                        <li>women's clothing</li>
                    </ul>
                    <div className="mt-10 h-full px-6 flex flex-wrap gap-10">
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                        <ProductCards/>
                    </div>
                </div>
            </div>
            {show &&
                <div className="w-1/4 border-2">

                </div>
            }
        </div>
    </div>
  )
}

export default Home;