import TopCollection from "../layout/TopCollection";
import Category from "../layout/Category";
import LoadingSidebar from "../component/LoadingSidebar";
import LoadingCard from "../component/LoadingCard";
import Sidebar from "../layout/Sidebar";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import ProductCards from "../component/ProductCards";
import useFetch from "../hook/useFetch";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const { data,isLoading, fetchError } = useFetch()
    
    const [searchResult,setSearchResult] = useState([])
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(0)
    const [focusId, setFocusId] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams({
        search: ""
    })
    const search = searchParams.get("search")
    console.log(search)

    const handleShow = (productId) => {
        setSelected(productId)
        setFocusId((prevFocusId) => (prevFocusId === productId ? null : productId));
        //setShow((prevShow) => !prevShow);
      };
     const { data:product,isLoading:prodLoading, fetchError:prodError } = useFetch(focusId)

     useEffect(() => {
        const filteredResult = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()));
        setSearchResult(filteredResult);
        
      }, [data, search]);    
      
      
     
     
  return (
    <div className="h-full relative">
       
        <TopCollection/>
        <div className=" w-full flex mb-20 rounded-t-[5rem] py-6 px-8 lg:px-6 min-h-screen">
                <div className="h-full mt-10" style={product ? {width: '75%'}: {width: '100%'}}>
                    <div className="h-full">
                        <div className="flex justify-between">
                            <h1 className="text-4xl font-bold">Products</h1>
                            <div className=' bg-slate-200 rounded-full px-4 py-2 flex items-center mr-6'>
                                <label htmlFor="cart"><SearchIcon/></label>
                                <input 
                                    type="search" 
                                    placeholder='Search' 
                                    value={search}
                                    id='cart' 
                                    className='text-base border-none px-4 py-2 rounded-full bg-transparent'
                                    onChange={(e)=>setSearchParams(
                                        prev => {
                                            prev.set("search", e.target.value)
                                            return prev
                                        },{replace: true}
                                    )}/>
                            </div>

                            

                        </div>
                        <ul className="flex flex-wrap gap-20 items-center text-2xl capitalize cursor-pointer mt-8 2xl:gap-10 lg:text-lg">
                            <li className="bg-slate-200 py-2 px-4 rounded-full" onClick={(e)=> setSearchParams(prev => {prev.set("search",'')
                             return prev },{replace: true})}>all products</li>
                            <li onClick={(e)=> setSearchParams(prev => {prev.set("search", e.target.textContent)
                             return prev },{replace: true})}>Electronics</li>
                            <li onClick={(e)=> setSearchParams(prev => {prev.set("search", e.target.textContent)
                             return prev },{replace: true})}>Jewelery</li>
                            <li onClick={(e)=> setSearchParams(prev => {prev.set("search", e.target.textContent)
                             return prev },{replace: true})}>men's clothing</li>
                            <li onClick={(e)=> setSearchParams(prev => {prev.set("search", e.target.textContent)
                             return prev },{replace: true})}>women's clothing</li>
                        </ul>
                        <div className="mt-10 h-full flex flex-wrap gap-10 md:gap-6">
                            {isLoading && 
                                <>
                                    <LoadingCard/>
                                    <LoadingCard/>
                                    <LoadingCard/>
                                    <LoadingCard/>
                                </>
                            }
                            {searchResult 
                                ? searchResult.map((product) => (
                                    <ProductCards data={product} key={product.id} handleShow={handleShow}/>
                                ))
                                : <p className='font-bold text-6xl text-center'>No Result</p>    
                            }
                        </div>
                    </div>
                </div>
                {selected === focusId &&
                    <div className="w-1/4 lg:w-96 border-2 rounded-t-[3rem] px-6 py-4 mt-10 h-[180vh] sticky top-10">
                        {product && <Sidebar product={product}/>}
                        {prodLoading && <LoadingSidebar/>}
                    </div>
                }
        </div>
    </div>
  )
}
export default Home;