import React from 'react'
import assets from '../../public/assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import {motion} from 'motion/react'

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <motion.div initial={{opacity:0, y:-50}} animate={{opacity:1, y:0}} transition={{duration:0.6, ease:'easeOut'}} className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-2xl font-medium bg-white/70 dark:bg-gray-900/50'>
        <img src={theme === 'dark' ? assets.light_logo : assets.dark_logo} className=" w-20 sm:w-14" alt="" />

        <div className={`text-gray-900 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-white max-sm:text-white max-sm:pt-18 flex sm:items-center gap-5 transition-all`}>
            <img src={assets.close} alt="" className='w-6 absolute right-4 top-11 sm:hidden' onClick={()=>setSidebarOpen(false)}/>
            <a onClick={()=>setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
            <a onClick={()=>setSidebarOpen(false)} href="#products" className='sm:hover:border-b'>Product</a>
            <a onClick={()=>setSidebarOpen(false)} href="#deals" className='sm:hover:border-b'>Deals</a>
            <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            {/* <img src={theme === 'dark' ? assets.menu : assets.menu_dark} alt="" onClick={()=>setSidebarOpen(true)} className='w-8 sm:hidden'/>
            <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-[#49290b] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'> Connect <img src={assets.connect} width={14} alt="" /></a> */}
        </div>
    </motion.div>
  )
}

export default Navbar
