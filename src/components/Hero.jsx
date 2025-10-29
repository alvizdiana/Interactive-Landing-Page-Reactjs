import React from 'react'
import assets from '../../public/assets/assets'
import {motion} from 'motion/react'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-black dark:text-white'>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.7}} viewport={{once:true}} className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium'> Trusted by 10k+ people</p>
        </motion.div>
        <motion.h1 initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.8}} viewport={{once:true}} className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading=[95px] max-w-5xl'>Grab your <span className='bg-linear-to-r from-[#552d17] to-[#9a3f3f] bg-clip-text text-transparent'>Coffee</span>, Enjoy your <span className='bg-linear-to-r from-[#552d17] to-[#9a3f3f] bg-clip-text text-transparent'>Free</span>day</motion.h1>
        <motion.p initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1}} viewport={{once:true}} className='text-gray-600 dark:text-gray-300 max-w-2xl text-sm sm:text-base'>Turn your "Friday" into "Freeyay" with a cup of coffee</motion.p>
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1}} viewport={{once:true}} className='relative'>
            <img src={assets.photo_1} alt="" className='w-full max-w-6xl rounded-3xl'/>
            <img src={assets.bg_1} alt="" className='absolute -top-10 -right-10 sm:-top-40 sm:-right-20 -z-1 dark:hidden blur-2xl opacity-50'/>
        </motion.div>
    </div>
  )
}

export default Hero
