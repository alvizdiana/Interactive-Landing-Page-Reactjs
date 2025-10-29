import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Product from './components/Product';
import Deals from './components/Deals';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <Product/>
      <Deals/>
      <ContactUs/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
