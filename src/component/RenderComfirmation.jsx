import { useContext } from "react";
import { DataContext } from "../utils/contextApi";

const RenderComfirmation = () => {
    const { confirmation } = useContext(DataContext)

  return (
    <div className="fixed top-[40%] right-6 bg-green-500 px-8 py-4 text-white duration-300 rounded-l-lg text-lg w-96 z-20" style={confirmation ? {transform: 'translateX(0%)'}: {transform: 'translateX(200%)'}}>
        <h1>Item successfully added to cart</h1>
    </div>
  )
}

export default RenderComfirmation;