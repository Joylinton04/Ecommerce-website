import { Link } from "react-router-dom";

const ProductCards = ({data, handleShow}) => {
  return (
    <div className="h-80 md:h-96 border-2 w-64 md:w-56 rounded-3xl p-4 gap-4 bg-slate-100 cursor-pointer relative">
       <div className="h-full w-full flex flex-col" onClick={()=>handleShow(data.id)}>
          <div className="h-[70%] bg-slate-300 rounded-3xl">
                <img src={data.image} alt="" className="w-full h-full object-cover object-center rounded-2xl"/>
            </div>
            <div className="h-[30%]">
                <h1 className="text-lg font-bold">{(data.title).length < 20 
                ? data.title
                : (data.title).slice(0, 20) + '...'
              }</h1>
                <p className="font-bold"><span className="capitalize text-base">price: </span> {data.price}$</p>
                <p className="w-[100%]">{(data.description).length < 20 
                ? data.description
                : (data.description).slice(0, 15) + '...'
              }</p>
            </div>
       </div>
        <div className="absolute bottom-2 right-2">
            <button className="px-2 py-1 bg-green-500 rounded-lg text-white">
              <Link to={`/purchase/${data.id}`}>See details</Link>
            </button>
        </div>
    </div>
  )
}

export default ProductCards;