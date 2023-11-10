

const ProductCards = ({data, handleShow}) => {
  return (
    <div className=" h-80 border-2 w-64 md:w-52 rounded-3xl p-4 flex flex-col gap-4 bg-slate-100 cursor-pointer" onClick={()=>handleShow(data.id)}>
        <div className="h-[65%] bg-slate-300 rounded-3xl">
            <img src={data.image} alt="" className="w-full h-full object-cover object-center rounded-2xl"/>
        </div>
        <div className="h-[35%]">
            <h1 className="text-lg font-bold">{(data.title).length < 20 
            ? data.title
            : (data.title).slice(0, 20) + '...'
          }</h1>
            <p className="font-bold"><span className="capitalize">price: </span> {data.price}$</p>
            <p className="w-[100%]">{(data.description).length < 20 
            ? data.description
            : (data.description).slice(0, 20) + '...'
          }</p>
        </div>
    </div>
  )
}

export default ProductCards;