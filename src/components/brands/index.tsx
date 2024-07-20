import React from 'react'
import OjmIcon from '../icons/ojm'

export default function Brands() {
    return (
        <section className=" bg-white    px-3 md:px-32 lg:px-64 ">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl ">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-black ">Apoio </h2>
                <div className="grid grid-cols-2 gap-8  sm:gap-12 md:grid-cols-3 lg:grid-cols-6 ">

                    <a href="#" className="flex justify-center items-center">
                        <img src='/frelimo.svg' className='h-20' />
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <OjmIcon className='h-20' />
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <img src='/omm.jpg' className='h-20' />

                    </a>

                    <a href="#" className="flex justify-center items-center">
                        <img src='/aclin.webp' className='h-20' />
                    </a>

                    <a href="#" className="flex justify-center items-center">

                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_of_the_MPLA_%28Angola%29.svg/1920px-Logo_of_the_MPLA_%28Angola%29.svg.png' className='h-20 w-full object-contain' />

                    </a>
                </div>
            </div>
        </section>
    )
}
