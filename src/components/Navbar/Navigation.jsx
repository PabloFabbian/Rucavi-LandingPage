import React from 'react'
import { Navbar } from "flowbite-react";

function Navigation() {
    return (
        <div className='navbar-degrade'>
            <Navbar fluid className='navbar-degrade mx-10'>
                <Navbar.Brand href="#">
                    <img src="src/assets/RucaviLogo.png" className="h-16 mr-3" alt="Rucavi Logo" />
                    <span className="self-center whitespace-nowrap text-4xl font-semibold text-violet-700 dark:text-white">Rucavi</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='text-sm text-[0.950rem] font-semibold navbar-link'>Nosotros</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm text-[0.950rem] font-semibold navbar-link'>Tecnología</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm text-[0.950rem] font-semibold navbar-link'>Partners</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm text-[0.950rem] font-semibold navbar-link'>Sumate</Navbar.Link>
                    <Navbar.Link href="#" className='text-sm text-[0.950rem] font-semibold navbar-link'>Contactanos</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation