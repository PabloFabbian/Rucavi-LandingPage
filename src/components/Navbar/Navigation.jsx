import React, { useEffect, useState } from 'react';
import { Navbar } from "flowbite-react";

function Navigation() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className='navbar-degrade'>
            <Navbar fluid className='navbar-degrade py-4'>
                <Navbar.Brand
                    href="#"
                    className={`ml-8 transform transition-transform duration-1500 ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-80'
                    }`}
                >
                    <img src="./src/assets/Rucavi-logo.webp" className="h-11 mr-6" alt="Rucavi Logo" />
                    <img src="./src/assets/Rucavi-txt.webp" className="h-8" alt="Rucavi" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group'>
                        Nosotros
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1"></span>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group'>
                        Tecnología
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1"></span>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group'>
                        Partners
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1"></span>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group'>
                        Sumate
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1"></span>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='nav-li text-sm text-[0.950rem] font-semibold navbar-link relative group'>
                        Contactanos
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 transition-all duration-300 transform origin-bottom scale-x-0 group-hover:scale-x-100 -mb-1"></span>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;