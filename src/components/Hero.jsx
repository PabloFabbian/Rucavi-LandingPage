import React from 'react'
import { Button } from "flowbite-react";

function Hero() {
    return (
        <body className='px-8 pb-4 hero-degrade'>
            <div className="relative h-screen">
                <img src="src/assets/Gray-bg2.png" className="bg-cover absolute top-0 left-0 w-full h-full" alt="Gray Background" />
                <header className="relative z-10 flex flex-col items-left p-24">
                    <h1 className="text-6xl font-bold tracking-wide text-violet-100">Tu aliado estratégico</h1>
                    <h1 className="text-6xl font-bold tracking-wide text-violet-100 mb-8">en tecnología.</h1>
                    <h3 className="text-3xl font-semibold text-violet-800 ml-1">Consultora IT</h3>
                </header>
                <section className='relative z-10 flex flex-col py-24 pl-24'>
                    <h2 className='text-3xl font-normal text-violet-100'>¿Buscas <span className='font-bold'>soluciones</span> de alto</h2>
                    <h2 className='text-3xl font-normal text-violet-100'>impacto para tu negocio?</h2>
                </section>
                <Button size="xl" className='relative z-10 flex m-24 bg-violet-300 text-violet-600 rounded-full font-semibold text-4xl'>Contactanos</Button>
                <div className="Arrow absolute bottom-6 right-0 z-10">
                    <svg
                        className="w-12 overflow-visible"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="#9999FF"
                        stroke="#9999FF"
                        strokeWidth="1.25"
                    >
                        <path d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z" data-name="2-Arrow Down" />
                    </svg>
                </div>
            </div>
        </body>
    )
}

export default Hero