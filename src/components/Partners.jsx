import React from 'react';
import BigPons from '../assets/bigpons.svg';
import Resumatio from '../assets/resumatio.svg';

const Partners = () => {
    return (
        <div className='partners-degrade py-16' id='Partners'>
            <div className="bg-[#AF92FE] flex flex-row items-start px-32 py-12">
                <div className="flex-1 text-left">
                    <h2 className="text-5xl font-bold text-gray-900">Partners</h2>
                    <h3 className="text-2xl tracking-wide text-violet-100 mt-2">Ellos confían en nosotros.</h3>
                </div>
                <div className="flex-1 flex items-center justify-start ml-14">
                    <div className="h-full flex items-center">
                        <img src={BigPons} alt="Big Pons" className="h-20 w-auto mx-8" />
                        <img src={Resumatio} alt="Resumatio" className="h-20 w-auto mx-8" />
                        <div className="h-20 w-20 mx-4 flex items-center justify-center text-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;