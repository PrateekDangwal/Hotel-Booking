import React from 'react'
import { assets } from '../assets/assets'
import Titel from './Titel'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
         
    <section className="flex flex-col items-center text-white">

            <div className="flex flex-col items-center">
                <h2 className="text-center text-4xl font-semibold max-w-2xl">Stay Inspired <span className="bg-gradient from-indigo-600 to-black p-1 bg-left inline-block bg-no-repeat"> </span></h2>
                <p className="text-center text-slate-400 max-w-lg mt-3">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            </div>
            <div className="flex items-center justify-center mt-10 border border-slate-700 focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-xl w-full">
                <input className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400" placeholder="Enter your email address" type="text" />
                <button className="bg-indigo-600 text-white rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition">Subscribe
                    <img  src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert group-hover:translate-x-1 transition-all'/>
                </button>
            </div>
        </section>
        </div>
  )   
}

export default NewsLetter
