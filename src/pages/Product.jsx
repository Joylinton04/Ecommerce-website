import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import Loading from "../component/Loading";
import { useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "../utils/contextApi";
import { useNavigate } from "react-router";
import useLocalStorage from "../hook/useLocalStorage";

const Product = () => {
    const { id } = useParams();
    const { data: productData, isLoading, fetchError } = useFetch(id);
    const { cart, setCart } = useContext(DataContext);
    const { setItem } = useLocalStorage('cart');
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!productData) {
            // Handle the case where product data is not available
            return;
        }

        const existingItem = cart.some((cartItem) => cartItem.id === productData.id);

        if (!existingItem) {
            setCart((prevCart) => [...prevCart, productData]);
            setItem([...cart, productData]);
        }
        //navigate(`/purchase`);
    };
  return (
    <div className="my-10 px-6">
        {isLoading && <Loading/>}
        {!fetchError && !isLoading && productData &&
            <div className="h-[70vh] flex md:gap-10 gap-6 w-full md:flex-col">
                <div className="h-full md:h-[100vh] border-2 rounded-2xl w-[60%] md:w-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center animate2">
                        <img src={productData.image} alt="image"  className="w-[70%] h-[70%] object-cover rounded-2xl"/>
                    </div>
                </div>
                <div className="h-full w-1/2 md:w-full rounded-2xl relative">
                    <h1 className="font-bold text-3xl py-6 md:py-0">{productData.title}</h1>
                    <p className="text-lg lg:text-base 2xl:text-base md:text-3xl">{productData.description}</p>
                    <div className="mt-10 capitalize">
                        <p className="font-semibold text-2xl lg:text-lg">price:</p>
                        <h1 className="font-bold text-7xl lg:text-5xl">{productData.price}$</h1>
                    </div>
                    <div className="mt-20 2xl:absolute 2xl:right-0 2xl:-mt-16">
                        <button className="py-3 px-4 rounded-lg bg-orange-500 text-white text-lg font-semibold" onClick={() => handleAddToCart()}>Add to cart</button>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Product;