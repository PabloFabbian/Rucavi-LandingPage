import React, { useEffect, useState } from 'react';
import { Navbar } from "flowbite-react";
import useScrollDirection from '../hooks/useScrollDirection';
import RucaviLogo from '../assets/Rucavi-logo.webp';
import RucaviText from '../assets/Rucavi-txt.webp'

function Navigation() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        setIsLoaded(true);

        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setIsOverlayOpen(false);
        }
    };

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <div>
            <div className={`fixed w-full transition-transform duration-250 ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'} z-40`}>
                <Navbar fluid className={`py-4 ${isTop ? 'navbar-degrade1' : 'navbar-degrade2'}`}>
                    <Navbar.Brand
                        onClick={(e) => handleSmoothScroll(e, '#Home')}
                        className={`ml-2 sm:ml-8 transform transition-transform duration-1000 hover:cursor-pointer ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-80'}`}
                    >
                        <img src={RucaviLogo} className="h-11 mr-6" alt="Rucavi Logo" />
                        <img src={RucaviText} className="h-[1.75rem]" alt="Rucavi" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="hover:bg-transparent text-gray-700 mt-1" onClick={toggleOverlay} />
                    <Navbar.Collapse className="hidden md:flex">
                        <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#AboutUs')} className='nav-li text-sm text-[0.950rem] font-medium navbar-link relative group hover:cursor-pointer'>
                            <span>Nosotros</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                        </Navbar.Link>
                        <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#TechStack')} className='nav-li text-sm text-[0.950rem] font-medium navbar-link relative group hover:cursor-pointer'>
                            <span>Tecnología</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                        </Navbar.Link>
                        <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#JoinUs')} className='nav-li text-sm text-[0.950rem] font-medium navbar-link relative group hover:cursor-pointer'>
                            <span>Sumate</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                        </Navbar.Link>
                        <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#Partners')} className='nav-li text-sm text-[0.950rem] font-medium navbar-link relative group hover:cursor-pointer'>
                            <span>Partners</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                        </Navbar.Link>
                        <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#ContactUs')} className='nav-li text-sm text-[0.950rem] font-medium navbar-link relative group hover:cursor-pointer'>
                            <span>Contactanos</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* Overlay for mobile */}
            <div className={`fixed inset-0 bg-[#EBE5FF] z-50 transform ${isOverlayOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center`}>
                <div onClick={(e) => handleSmoothScroll(e, '#Home')} className='flex flex-nowrap items-center justify-center mt-5 -ml-32'>
                    <img src={RucaviLogo} className="h-11 mr-6" alt="Rucavi Logo" />
                    <img src={RucaviText} className="h-[1.75rem]" alt="Rucavi" />
                </div>

                <div className="h-full bg-[#EBE5FF] flex flex-col items-left space-y-6 mt-14 -ml-2">
                    <button onClick={toggleOverlay} className="absolute top-5 right-5">
                        <svg className="h-11 w-11 text-[#474550]" fill="none" stroke="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M26.606,26.606C23.773,29.439,20.007,31,16,31s-7.773-1.561-10.606-4.394S1,20.007,1,16 S2.561,8.227,5.394,5.394S11.993,1,16,1s7.773,1.561,10.606,4.394S31,11.993,31,16S29.439,23.773,26.606,26.606z"></path>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" d="M22.01,9.989c-0.195-0.195-0.512-0.195-0.707,0L16,15.293l-5.303-5.304c-0.195-0.195-0.512-0.195-0.707,0 s-0.195,0.512,0,0.707L15.293,16L9.99,21.304c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146L16,16.707l5.303,5.304c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707L16.707,16l5.303-5.304C22.206,10.501,22.206,10.185,22.01,9.989z"></path>
                        </svg>
                    </button>
                    <a onClick={(e) => handleSmoothScroll(e, '#AboutUs')} className="text-[2.6rem] font-bold text-left hover:cursor-pointer">
                        Nosotros.
                    </a>
                    <a onClick={(e) => handleSmoothScroll(e, '#TechStack')} className="text-[2.6rem] font-bold text-left hover:cursor-pointer">
                        Tecnologias.
                    </a>
                    <a onClick={(e) => handleSmoothScroll(e, '#Partners')} className="text-[2.6rem] font-bold text-left hover:cursor-pointer">
                        Partners.
                    </a>
                    <a onClick={(e) => handleSmoothScroll(e, '#JoinUs')} className="text-[2.6rem] font-bold text-left hover:cursor-pointer">
                        Sumate.
                    </a>
                    <a onClick={(e) => handleSmoothScroll(e, '#ContactUs')} className="text-[2.6rem] font-bold text-left hover:cursor-pointer">
                        Contactanos.
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;