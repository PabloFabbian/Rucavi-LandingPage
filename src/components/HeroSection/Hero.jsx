import React from 'react'
import { Button } from "flowbite-react";

function Hero() {
    return (
        <body className='px-8 pb-4 rounded-md'>
            <img src="src/assets/.png" className="bg-cover" alt="Gray Background" />
            <header className=''>
                <h1 className='text-5xl font-bold text-violet-300'>Tu aliado estratégico</h1>
                <h1 className='text-5xl font-bold text-violet-300'>en tecnología.</h1>
                <h3 className='text-2xl font-semibold text-blue-700'>Consultora IT</h3>
            </header>
            <section>
                <h2 className='text-2xl font-semibold'>¿Buscas <span className='font-bold'>soluciones</span> de alto</h2>
                <h2 className='text-2xl font-semibold'>impacto para tu negocio?</h2>
            </section>
            <footer>
                <Button className='bg-violet-300 text-violet-600 text-xl rounded-full'>Contactanos</Button>
            </footer>
            <div className=''>
            </div>
        </body>
    )
}

export default Hero