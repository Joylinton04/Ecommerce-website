import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Approute from './route/Approute';
import './App.css'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Approute/>
      <Footer/>
    </div>
  )
}

export default App;