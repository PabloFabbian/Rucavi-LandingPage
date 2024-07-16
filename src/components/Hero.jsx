import React from 'react';

function Hero() {
    // Función para hacer scroll suave al hacer clic en los enlaces del navbar
    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Scroll suave
                block: 'start'      // Alinea el elemento en la parte superior del viewport
            });
        }
    };

    return (
        <div className='px-8 pt-[5.2rem] pb-4 hero-degrade' id='Home'>
            <div className="relative h-screen">
                <img src="src/assets/Gray-bg2.png" className="bg-cover absolute top-0 left-0 w-full h-full" alt="Gray Background" />
                <header className="relative z-10 flex flex-col items-left p-24">
                    <h1 className="text-6xl font-[700] tracking-wide text-violet-100">Tu aliado estratégico</h1>
                    <h1 className="text-6xl font-[700] tracking-wide text-violet-100 mb-8">en tecnología.</h1>
                    <h3 className="text-[2rem] font-[500] text-[#5C26FD] tracking-wide ml-1">Consultora IT.</h3>
                </header>
                <section className='relative z-10 flex flex-col tracking-wide py-24 pl-24'>
                    <h2 className='text-3xl font-normal text-violet-100'>¿Buscas <span className='font-bold'>soluciones</span> de alto</h2>
                    <h2 className='text-3xl font-normal text-violet-100'>impacto para tu negocio?</h2>
                </section>
                <a href="#ContactUs" onClick={(e) => handleSmoothScroll(e, '#ContactUs')} className='inline-flex relative z-10 flex m-24 bg-[#EBE5FF] text-indigo-600 rounded-full font-semibold text-xl px-6 pt-1.5 pb-2'>Contactanos</a>
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
        </div>
    );
}

export default Hero;