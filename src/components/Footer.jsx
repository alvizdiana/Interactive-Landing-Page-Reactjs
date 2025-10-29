import React from 'react'
import assets from '../../public/assets/assets'
import {motion} from 'motion/react'

const Footer = ({theme}) => {
  return (
    <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className='bg-slate-50 dark:bg-[#49290b]/50 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* Top Footer */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}} viewport={{once:true}} className='space-y-5 text-gray-700 dark:text-gray-400'>
                <img src={theme === 'dark' ? assets.light_logo : assets.dark_logo} className="w-20 sm:w-14" alt="" />
                <p className='max-w-md text-sm'>Turn your "Friday" into "Freeyay" with a cup of coffee</p>
                <ul className='text-xs'>
                    <li><a href="#hero" className='hover:text-[#49290b]'>Home</a></li>
                    <li><a href="#products" className='hover:text-[#49290b]'>Product</a></li>
                    <li><a href="#deals" className='hover:text-[#49290b]'>Deals</a></li>
                    <li><a href="#" className='hover:text-[#49290b]'>Cornelia Street, number 127</a></li>
                </ul>
            </motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}} viewport={{once:true}} className='text-gray-600 dark:text-gray-400'>
                <h3 className='font-semibold'>Subscibe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>Discover our new best deals and get ready to enjoy your coffee, we will send the newsletter weekly.</p>
                <div className='flex gap-2 text-sm'>
                    <input type="email" placeholder='Enter your email' className='w-full p-3 text-xs outline-none rounded dark:text-gray-400 bg-transparent border border-gray-300 dark:border-gray-500'/>
                    <button className='bg-[#49290b] text-white rounded px-6'>Subscribe</button>
                </div>
            </motion.div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6'/>
        
        {/* Bottom Footer */}
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}} className='pb-6 text-xs text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
            <p>Copyright 2025 © Alvi Zumaela Izdiana - All right reserved.</p>
            <div className='flex items-center justify-between gap-4 w-3 sm:w-4 mr-24 invert-70'>
                <img src={assets.instagram} alt="" />
                <img src={assets.facebook_logo_2_block} alt="" />
                <img src={assets.twitter_logo_1_block} alt="" />
                <img src={assets.tiktok_logo_block} alt="" />
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Footer
