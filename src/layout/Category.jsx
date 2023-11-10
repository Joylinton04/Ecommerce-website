

const Category = () => {
  return (
    <div className="mx-2 -mt-8 bg-white rounded-t-[4rem] h-28 py-6 px-8">
        <ul className="flex justify-evenly items-center text-2xl capitalize cursor-pointer">
            <li className="bg-slate-200 py-2 px-4 rounded-full">all products</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>men's clothing</li>
            <li>women's clothing</li>
        </ul>
    </div>
  )
}

export default Category;