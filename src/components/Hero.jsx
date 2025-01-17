import React from 'react';
import GrayBackground from '../assets/gray-bg4.webp';

function Hero() {
    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className='px-3 sm:px-8 pb-4' id='Home'>
            <div className="relative min-h-screen z-20">
                <img
                    src={GrayBackground}
                    className="absolute top-0 left-0 w-full h-[86%] sm:h-[90%] object-cover
                    rounded-tr-xl sm:rounded-tr-3xl rounded-tl-xl sm:rounded-tl-3xl rounded-bl-xl sm:rounded-bl-3xl rounded-br-5xl sm:rounded-br-7xl"
                    alt="Gray Background"
                />
                <header className="Title-sub sticky z-10 flex flex-col items-left p-4 sm:p-[5.2rem]">
                    <div className="mt-24 sm:mt-0 ml-1.5 sm:ml-0">
                        <h1 className="Title-1 text-4xl sm:text-6xl font-semibold tracking-wide text-violet-100 fade-in fade-in-delay-1">Tu aliado estratégico</h1>
                        <h1 className="Title-2 text-4xl sm:text-6xl font-semibold tracking-wide text-violet-100 mb-4 sm:mb-8 fade-in fade-in-delay-1">en tecnología.</h1>
                    </div>
                    <h3 className="Sub text-xl sm:text-[2rem] font-[500] text-[#5C26FD] tracking-wide ml-1 -mt-52 sm:mt-0 fade-in fade-in-delay-1">Consultora IT.</h3>
                </header>
                <section className='HeroQuestion relative z-10 flex flex-col tracking-wide py-12 sm:py-24 pl-4 sm:pl-24 mt-64 sm:mt-0'>
                    <h2 className="HeroQuestion-1 text-lg sm:text-3xl font-normal text-violet-100 fade-in fade-in-delay-2">¿Buscas <span className='font-semibold'>soluciones</span> de alto</h2>
                    <h2 className="HeroQuestion-2 text-lg sm:text-3xl font-normal text-violet-100 fade-in fade-in-delay-2">impacto para tu negocio?</h2>
                </section>
                <a href="#ContactUs" onClick={(e) => handleSmoothScroll(e, '#ContactUs')} className='ContactUs-button inline-flex relative z-10 flex ml-4 sm:m-24 bg-[#EBE5FF] text-indigo-600 rounded-full font-semibold text-lg sm:text-xl px-4 sm:px-6 py-1.5 fade-in-button transition transform hover:bg-purple-300'>Contactanos</a>
                <div onClick={(e) => handleSmoothScroll(e, '#AboutUs')} className="Arrow absolute bottom-[5.9rem] sm:bottom-[7.2rem] right-0 z-10 hover:cursor-pointer">
                    <svg
                        className="w-10 sm:w-12 overflow-visible"
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