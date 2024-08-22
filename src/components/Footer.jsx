import React from 'react';
import Rucavi from '../assets/Rucavi-white-txt.svg';

function Footer() {
    return (
        <div>
            <hr className="border-[#EAE4FE] ml-6 mr-3 md:mx-32 mt-8 md:mt-20" />
            <div className='pt-3 md:pt-8 pb-8 pl-6 md:pl-[68.6rem] flex justify-between items-start md:flex-col'>
                <img src={Rucavi} alt="Rucavi" className="h-5 md:h-8" />
                <span className="flex no-wrap text-[#CBBCFF] font-thin text-base md:mt-2 mr-3 mt-1 md:hidden">
                    Consultora IT.
                </span>
            </div>
        </div>
    );
}

export default Footer;