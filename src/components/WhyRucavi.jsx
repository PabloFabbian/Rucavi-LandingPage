import React from 'react';
import { Button } from 'flowbite-react';
import LaptopByN from '../assets/LaptopByN.jpg';

const WhyRucavi = () => {
    return (
        <div className="px-16 py-12 why-degrade">
            <div className="flex flex-col lg:flex-row items-start gap-10 mx-12">
                <div className="flex-1 text-left relative">
                    <h1 className="text-6xl text-gray-200 font-semibold leading-none mb-4 ml-16 relative z-20">
                        <div className='ml-[0.22rem]'>
                            Forma <span> parte de</span> <br />
                        </div>
                        <span className="block">
                            <span className="inline-block z-20">RUCAVI</span>
                        </span>
                    </h1>
                    <div className="relative inline-block z-10 -mt-10">
                        <img src={LaptopByN} alt="Rounded" className="w-full h-96 rounded-3xl object-cover" />
                        <p className="absolute inset-0 flex items-end justify-left text-white pl-16 pb-12 text-lg tracking-wider">Estamos recibiendo cvs.</p>
                    </div>
                </div>
                <div className="flex-1 -mr-28">
                    <h3 className="text-[1.975rem] font-semibold mb-2 text-[#7C50FF] pt-4 -ml-4">¿Por qué sumarte a la comunidad de RUCAVI?</h3>
                    <hr className="border-gray-900 mt-8 w-5/6" />
                    <div className="mb-4 text-[1.65rem] text-gray-200 font-[350] leading-[1.05] mt-6 pr-48">
                        <p>En RUCAVI, estamos constantemente buscando mentes brillantes y apasionadas por la tecnología para unirse a nuestro equipo.
                        <br /><br />
                        Si te apasiona la innovación y queres enfrentar nuevos desafíos ¡Nos encantaría conocerte!
                        <br /><br />
                        Mandanos tu CV a <span className="font-[650] text-gray-700">contacto@rucavi.com</span> y unite a nosotros en este viaje. </p>
                    </div>
                    <Button size="md" className='WhyButton mt-14 bg-transparent text-violet-200 rounded-full outline outline-2 outline-violet-200 w-36'>Email</Button>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-3xl mb-4 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full inline-block mr-2 mt-1.5 font-bold"></span>
                    Contacto
                </h2>
                <ul className="list-none text-left ml-6 text-xl text-purple-700">
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>+54 9 11 2255-9876</li>
                    <li>contacto@rucavi.com</li>
                </ul>
            </div>

            <hr className="my-10 border-gray-300" />

            <h5 className="text-2xl font-semibold justify-end">¡Unite al equipo!</h5>
        </div>
    );
};

export default WhyRucavi;