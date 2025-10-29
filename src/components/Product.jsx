import React from 'react'
import assets from '../../public/assets/assets'
import Title from './Title'
import ProductCard from './ProductCard'
import {motion} from 'motion/react'

const Product = () => {

    const product = [
        {
            title: 'Ready to Drink Coffee',
            description: 'Convenient and delicious pre-made coffee beverages for on-the-go enjoyment.',
            icon: assets.coffee_mug
        },
        {
            title: 'Coffee Beans',
            description: 'Freshly roasted coffee beans sourced from premium coffee farms around the world.',
            icon: assets.coffee_beans
        },
        {
            title: 'Coffe Based Desserts',
            description: 'Indulge in our delectable coffee-infused desserts, perfect for satisfying your sweet tooth.',
            icon: assets.cupcake
        },
        {
            title: 'Souvenirs',
            description: 'Unique coffee-themed souvenirs and merchandise to celebrate your love for coffee.',
            icon: assets.souvenirs
        },
    ]

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{staggerChildren:0.2}} id='products' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bg_2} alt="" className='absolute -top-70 -left-170 -z-1 blur-3xl opacity-20 rotate-45 dark:hidden'/>
        <Title title='Here Our Products' desc='We dedicated our products for coffee enjoyer all over the world🌍'/>
        <div className='flex flex-col md:grid grid-cols-2'>
            {product.map((product, index)=>(
                <ProductCard key={index} product={product} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Product
