import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import Loading from "../component/Loading";
import { useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "../utils/contextApi";
import { useNavigate } from "react-router";

const Product = () => {
    const {id} = useParams()
    const {data, isLoading, fetchError} = useFetch(id)
    const { cart, setCart } = useContext(DataContext)
    const navigate = useNavigate()

    const handleAddToCart = () => {
        setCart((prevCart)=> {
            const existingItem = prevCart.find((cart)=> cart.id === data.id )
            if (existingItem){
                return prevCart
            } else {
                return [...prevCart, data]
            }
        })
        navigate(`/purchase`)
    }
    console.log(cart)

  return (
    <div className="my-10 px-6">
        {isLoading && <Loading/>}
        {!fetchError && !isLoading && data &&
            <div className="h-[70vh] flex gap-6 w-full">
                <div className="h-full border-2 rounded-2xl w-[60%] bg-slate-100 overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center animate2">
                        <img src={data.image} alt="image"  className="w-[70%] h-[70%] object-cover rounded-2xl"/>
                    </div>
                </div>
                <div className="h-full w-2/5 rounded-2xl">
                    <h1 className="font-bold text-3xl py-6">{data.title}</h1>
                    <p className="text-lg">{data.description}</p>
                    <div className="mt-10 capitalize">
                        <p className="font-bold text-2xl">price:</p>
                        <h1 className="font-bold text-7xl">{data.price}$</h1>
                    </div>
                    <div className="mt-20">
                        <button className="py-4 px-4 rounded-lg bg-orange-500 text-white text-lg font-semibold" onClick={() => handleAddToCart()}>Add to cart</button>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Product;