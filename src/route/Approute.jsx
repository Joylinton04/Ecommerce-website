import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import Purchase from "../pages/Purchase";

const Approute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
    </Routes>
  )
}

export default Approute;