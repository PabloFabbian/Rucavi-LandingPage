import React from 'react';
import BigPons from '../assets/bigpons.svg';
import Resumatio from '../assets/resumatio.svg';
import Par from '../assets/par-b.svg';

const Partners = () => {
    return (
        <div className="partners-degrade py-16" id="Partners">
            <div className="bg-[#AF92FE] flex flex-col md:flex-row items-start px-8 md:px-32 py-12">
                <div className="flex-1 text-left mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Partners</h2>
                    <h3 className="text-xl md:text-2xl tracking-wide text-violet-100 mt-2">Ellos confían en nosotros.</h3>
                </div>
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-28">
                    <div className="partner-item">
                        <img src={BigPons} alt="Big Pons" className="partner-logo h-16 w-auto md:h-20" />
                    </div>
                    <div className="partner-item">
                        <img src={Resumatio} alt="Resumatio" className="partner-logo h-16 w-auto md:h-20" />
                    </div>
                    <div className="partner-item">
                        <img src={Par} alt="Patitas Al Rescate" className="partner-logo h-16 w-auto md:h-20" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;