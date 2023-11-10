import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import './App.css'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App;