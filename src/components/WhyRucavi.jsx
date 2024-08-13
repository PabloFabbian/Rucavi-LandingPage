import React from 'react';
import LaptopByN from '../assets/LaptopByN.webp';
import WhiteArrowIcon from '../assets/WhiteArrowIcon.svg'

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const whatsappNumberVisual = import.meta.env.VITE_WHATSAPP_NUMBER_VISUAL;
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

const emailDir = import.meta.env.VITE_EMAIL_DIRECTION;
const emailUrl = `mailto:${emailDir}`;

const LinkedinUrl = import.meta.env.VITE_LINKEDIN_DIRECTION;
const InstagramUrl = import.meta.env.VITE_INSTAGRAM_DIRECTION;

const WhyRucavi = () => {
    return (
        <div className="px-0 md:px-2 md:px-16 pt-8 pb-6 why-degrade" id='JoinUs'>
            <div className="flex flex-col lg:flex-row flex-wrap md:flex-nowrap items-start md:gap-40 mx-2 md:ml-12 md:mb-10">
                <div className="flex-1 text-left relative">
                    <h1 className="text-4xl md:text-6xl text-[#EAE4FE] font-bold leading-none mb-4 ml-6 md:ml-16 relative z-20">
                        <div className='ml-[0.26rem] mb-0.5'>
                            Forma <span> parte de</span> <br />
                        </div>
                        <span className="block">
                            <span className="inline-block text-gray-900 z-20">RUCAVI</span>
                        </span>
                    </h1>
                    <div className="relative inline-block z-10 -mt-[4.8rem] md:-mt-[6.85rem] flex justify-center items-center h-full">
                        <img src={LaptopByN} alt="Rounded" className="flex shrink-0 w-full h-full rounded-3xl object-cover ml-5 md:ml-24 scale-100 md:scale-[1.18]" />
                        <p className="text-sm md:text-xl absolute inset-0 flex items-end justify-left text-gray-900 pl-8 md:pl-[4.6rem] pb-14 md:pb-32 text-lg tracking-wider">Estamos recibiendo cvs.</p>
                    </div>
                </div>
                <div className="flex-1 relative md:mt-5">
                    <h3 className="inline text-[1rem] md:text-[1.975rem] font-semibold mb-2 text-[#7C50FF] pt-4 ml-7 md:ml-0">¿Por qué sumarte a la comunidad de RUCAVI?</h3>
                    <hr className="border-[#1D1D1B] mt-2 md:mt-9 w-11/12 md:w-5/6 mx-4" />
                    <div className="mb-4 text-[0.9rem] md:text-[1.65rem] text-[#EAE4FE] font-[350] leading-[1.05] mt-6 md:mt-8 px-4 md:pr-24">
                        <img src={WhiteArrowIcon} className="absolute left-[-2.8rem] top-[7.65rem] h-6 w-6" />
                        <p>En RUCAVI, estamos constantemente buscando mentes brillantes y apasionadas por la tecnología para unirse a nuestro equipo.
                            <br /><br />
                            Si te apasiona la innovación y queres enfrentar nuevos desafíos ¡Nos encantaría conocerte!
                            <br /><br />
                            Mandanos tu CV a <span className="font-semibold text-[#464452]">contacto@rucavi.com</span> y unite a nosotros en este viaje. </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            const element = document.getElementById('ContactUs');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className='bg-transparent rounded-full outline outline-1 outline-violet-200 hover:bg-violet-200 text-[#5B24FD] text-[1.2rem] md:text-[1.6rem] font-[450] ml-4 md:ml-4 mt-4 md:mt-[4.6rem] pt-0 md:pt-0.5 pb-0.5 md:pb-1 w-20 md:w-44 transition-colors duration-200 ease-in-out'>
                        Email
                    </button>
                </div>
            </div>

            <div className='mt-12 md:mt-0'>
                <h2 className="text-base md:text-2xl mb-0 md:mb-4 flex items-center text-[#474550] font-bold ml-1 md:ml-7">
                    <span className="w-1 h-1 md:w-2 md:h-2 bg-gray-100 rounded-full inline-block mr-[16px] md:mr-[75px]"></span>
                    Contacto
                </h2>
                <ul className="flex flex-nowrap list-none text-left mx-6 md:mx-4 text-[0.65rem] md:text-xl text-[#5B24FD] leading-9 px-0 md:px-24 justify-between">
                    <li><a href={LinkedinUrl} target="_blank" rel="noopener noreferrer" className='hover:text-purple-800'>Linkedin</a></li>
                    <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='hover:text-purple-800'>{whatsappNumberVisual}</a></li>
                    <li><a href={emailUrl} target="_blank" rel="noopener noreferrer" className='font-semibold hover:text-purple-800'>{emailDir}</a></li>
                    <li><a href={InstagramUrl} target="_blank" rel="noopener noreferrer" className='hover:text-purple-800'>Instagram</a></li>
                </ul>
            </div>

            <hr className="mt-0 md:mt-10 mb-3 md:mb-6 mx-[1.4rem] md:mx-[7rem] border-[#E9E5FE]" />

            <h5 className="text-base md:text-xl text-gray-800 font-semibold justify-start text-left ml-5 md:ml-[6.8rem]">¡Unite al equipo!</h5>
        </div>
    );
};

export default WhyRucavi;