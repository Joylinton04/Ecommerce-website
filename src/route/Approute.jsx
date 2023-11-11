import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import Purchase from "../pages/Purchase";
import Product from '../pages/Product';

const Approute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path="/purchase/:id" element={<Product/>}/>
    </Routes>
  )
}

export default Approute;