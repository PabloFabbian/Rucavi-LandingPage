import React from 'react';
import LaptopByN from '../assets/LaptopByN.jpg';
import WhiteArrowIcon from '../assets/WhiteArrowIcon.svg'

const WhyRucavi = () => {
    return (
        <div className="px-16 py-12 why-degrade" id='JoinUs'>
            <div className="flex flex-col lg:flex-row items-start gap-10 mx-12">
                <div className="flex-1 text-left relative">
                    <h1 className="text-6xl text-gray-200 font-bold leading-none mb-4 ml-16 relative z-20">
                        <div className='ml-[0.26rem] mb-0.5'>
                            Forma <span> parte de</span> <br />
                        </div>
                        <span className="block">
                            <span className="inline-block text-gray-900 z-20">RUCAVI</span>
                        </span>
                    </h1>
                    <div className="relative inline-block z-10 -mt-10">
                        <img src={LaptopByN} alt="Rounded" className="w-full h-96 rounded-3xl object-cover -ml-12" />
                        <p className="absolute inset-0 flex items-end justify-left text-gray-900 pl-16 pb-12 text-lg tracking-wider">Estamos recibiendo cvs.</p>
                    </div>
                </div>
                <div className="flex-1 -mr-28">
                    <h3 className="text-[1.975rem] font-semibold mb-2 text-[#7C50FF] pt-4 -ml-4">¿Por qué sumarte a la comunidad de RUCAVI?</h3>
                    <hr className="border-gray-900 mt-8 w-5/6" />
                    <div className="mb-4 text-[1.65rem] text-gray-200 font-[350] leading-[1.05] mt-6 pr-48">
                        <img src={WhiteArrowIcon} style={{ position: 'absolute', left: '60rem', top: '207.6rem', height: '1.5rem', width: '1.5rem' }} />
                        <p>En RUCAVI, estamos constantemente buscando mentes brillantes y apasionadas por la tecnología para unirse a nuestro equipo.
                        <br /><br />
                        Si te apasiona la innovación y queres enfrentar nuevos desafíos ¡Nos encantaría conocerte!
                        <br /><br />
                        Mandanos tu CV a <span className="font-semibold text-[#464452]">contacto@rucavi.com</span> y unite a nosotros en este viaje. </p>
                    </div>
                    <button
                        className='bg-transparent rounded-full outline outline-1 outline-violet-200 hover:bg-violet-200
                        text-indigo-600 text-[1.6rem] font- mt-12 pt-0.5 pb-1 w-44 transition-colors duration-200 ease-in-out'>
                        Email
                    </button>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl mb-4 flex items-center text-[#474550] font-bold">
                    <span className="w-2 h-2 bg-[#474550] rounded-full inline-block mt-1.5 mr-[75px]"></span>
                    Contacto
                </h2>
                <ul className="list-none text-left ml-6 text-xl text-purple-600 leading-9 pl-16">
                    <li><a href="" className='hover:text-purple-800'>Linkedin</a></li>
                    <li><a href="" className='hover:text-purple-800'>Instagram</a></li>
                    <li><a href="" className='hover:text-purple-800'>+54 9 11 2255-9876</a></li>
                    <li><a href="" className='hover:text-purple-800'>contacto@rucavi.com</a></li>
                </ul>
            </div>

            <hr className="my-8 mx-20 border-gray-300" />

            <h5 className="text-2xl text-gray-800 font-semibold text-center pl-80">¡Unite al equipo!</h5>
        </div>
    );
};

export default WhyRucavi;