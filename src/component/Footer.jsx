import logo from '../assets/ecom.svg'

const Footer = () => {
  return (
    <div className="bg-[#681f23] h-56 rounded-t-3xl text-white flex justify-center relative">
        <div className='flex justify-evenly items-center w-1/2'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="logo" className='w-16 h-16 object-cover rounded-full'/>
                <h1 className="text-3xl font-bold">ECOM</h1>
            </div>
            <div className='capitalize'>
                <h1 className='text-2xl font-bold'>social links</h1>
                <ul>
                    <li>Twitter</li>
                    <li>instagram</li>
                </ul>
            </div>
        </div>
        <p className='absolute bottom-0 pt-2 left-1/2 -translate-x-1/2 bg-[#52181b] w-1/2 h-10 text-center text-lg font-medium rounded-t-2xl'>copyright &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer;