import React, { useEffect, useState } from 'react';
import { Navbar } from "flowbite-react";
import useScrollDirection from './useScrollDirection';

function Navigation() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTop, setIsTop] = useState(true);
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
        }
    };

    return (
        <div className={`fixed w-full transition-transform duration-250 ${scrollDirection === 'up' ? 'translate-y-0' : '-translate-y-full'} z-40`}>
            <Navbar fluid className={`py-4 ${isTop ? 'navbar-degrade1' : 'navbar-degrade2'}`}>
                <Navbar.Brand
                    onClick={(e) => handleSmoothScroll(e, '#Home')}
                    className={`ml-8 transform transition-transform duration-1500 hover:cursor-pointer ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-80'
                        }`}
                >
                    <img src="./src/assets/Rucavi-logo.webp" className="h-11 mr-6" alt="Rucavi Logo" />
                    <img src="./src/assets/Rucavi-txt.webp" className="h-[1.75rem]" alt="Rucavi" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#AboutUs')} className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group hover:cursor-pointer'>
                        <span>Nosotros</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                    </Navbar.Link>
                    <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#TechStack')} className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group hover:cursor-pointer'>
                        <span>Tecnología</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                    </Navbar.Link>
                    <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#JoinUs')} className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group hover:cursor-pointer'>
                        <span>Sumate</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                    </Navbar.Link>
                    <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#Partners')} className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group hover:cursor-pointer'>
                        <span>Partners</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                    </Navbar.Link>
                    <Navbar.Link onClick={(e) => handleSmoothScroll(e, '#ContactUs')} className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group hover:cursor-pointer'>
                        <span>Contactanos</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1 bg-violet-500 z-50"></div>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;