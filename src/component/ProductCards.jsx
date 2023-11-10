import shoe from '../assets/shoe.jpeg'

const ProductCards = () => {
  return (
    <div className=" h-80 border-2 w-64 rounded-3xl p-4 flex flex-col gap-4">
        <div className="h-[65%] bg-slate-300 rounded-3xl">
            <img src={shoe} alt="" className="w-full h-full object-cover object-center rounded-2xl"/>
        </div>
        <div className="h-[35%] overflow-hidden text-ellipsis">
            <h1 className="text-lg font-semibold">Jordan</h1>
            <p><span>price: </span> 499$</p>
            <p className="w-[100%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas praesentium, necessitatibus aliquid amet nemo et fuga ad! Impedit sunt ratione eum animi delectus vitae. Debitis eius sapiente accusamus dolore.</p>
        </div>
    </div>
  )
}

export default ProductCards;