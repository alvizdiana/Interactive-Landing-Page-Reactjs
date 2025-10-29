import React from 'react'
import Title from './Title'
import assets from '../../public/assets/assets'
import {motion} from 'motion/react'

const Deals = () => {
    const dealsData = [
        {
            title: '$5.90 For Special Delicious Coffee',
            description: 'Treat yourself to our special delicious coffee made from premium beans, now available at just $5.90.',
            image: assets.poster_1
        },
        {
            title: '20% Off on Friday (All Variant)',
            description: 'Celebrate the weekend early with 20% off on all coffee variants every Friday. Don\'t miss out!',
            image: assets.poster_2
        },
        {
            title: '$5.90 For Esspresso Fresh Always',
            description: 'Experience the perfect shot of espresso made from freshly ground beans, now at an unbeatable price.',
            image: assets.poster_3
        },
    ]
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{staggerChildren:0.2}} id='deals' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Best Deals This Freeyay!' desc='Enjoy your friday with our best deals for your favorite coffee here!'/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                dealsData.map((deal, index)=>(
                    <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay: index * 0.2}} viewport={{once:true}} key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={deal.image} alt="" className='w-full rounded-xl'/>
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{deal.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{deal.description}</p>
                    </motion.div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Deals
