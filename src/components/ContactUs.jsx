import React from 'react'
import Title from './Title'
import assets from '../../public/assets/assets'
import {motion} from 'motion/react'
import toast from 'react-hot-toast'

const ContactUs = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // i suggest using web3 forms for handling form submissions
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try{
            const response = fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                redirect: "follow",
            });
    
            const data = response.json();
    
            if (data.success) {
                toast.success("Thank you for your submission!");
                e.target.reset();
            } else {
                toast.error(data.message);
            }
        }catch (error) {
            toast.error(error.message);
        }
    }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} transition={{staggerChildren: 0.2}} id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach Out to Us' desc='Coffee is not just a beverage, it is a work of art that can make your day better in a magical way. We are open to the opportunity of collaborating with you!'/>

        <motion.form initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} viewport={{once:true}} onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' action="">
            <div>
                <p className='mb-2 text-sm font-medium'>Kimi no Nawa</p>
                <div className='flex pl-3 rounded-lg border border-lg border-gray-300 dark:border-gray-600'>
                    <img src={assets.person} alt="" className='flex items-center gap-2 max-w-6'/>
                    <input type="text" placeholder='Enter your name / company name' className='w-full p-3 text-xs outline-none opacity-40' required/>
                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Email</p>
                <div className='flex pl-3 rounded-lg border border-lg border-gray-300 dark:border-gray-600'>
                    <img src={assets.mail} alt="" className='flex items-center gap-2 max-w-6'/>
                    <input type="text" placeholder='Enter your Email' className='w-full p-3 text-xs outline-none opacity-40' required/>
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <div className='flex rounded-lg border border-lg border-gray-300 dark:border-gray-600'>
                    <textarea rows={8} placeholder='Enter Your Message' className='w-full p-3 text-xs outline-none rounded-lg border border-gray-300 dark:border-gray-600 opacity-40' name="" id=""></textarea>
                </div>
            </div>
            <button type="submit" className='w-max flex gap-2 bg-[#49290b] text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit <img src={assets.send} alt="" className='flex items-center gap-2 max-w-5.5'/>
            </button>
        </motion.form>
    </motion.div>
  )
}

export default ContactUs
