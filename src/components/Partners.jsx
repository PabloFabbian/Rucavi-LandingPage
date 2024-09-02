import React from 'react';
import BigPons from '../assets/bigpons.svg';
import Resumatio from '../assets/resumatio.svg';
import Par from '../assets/par-b.svg';

const Partners = () => {
    return (
        <div className="py-6 md:py-16" id="Partners">
            <div className="bg-[#AA8EFF] sm:bg-[#AF92FE] flex flex-col md:flex-row items-left md:items-start px-6 md:px-14 lg:px-24 py-8 md:py-12 justify-between">
                <div className="text-left md:text-left mb-6 md:mb-0 flex flex-col items-start md:items-start">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Partners</h2>
                    <h3 className="text-xl md:text-2xl tracking-wide text-violet-100 mt-1 pr-4">Ellos confían en nosotros.</h3>
                </div>

                <div className="PartnersImg flex flex-row items-center justify-center gap-7 md:gap-14 lg:gap-28">
                    <div className="flex-shrink-0">
                        <img src={Resumatio} alt="Resumatio" className="partner-logo h-14 w-auto md:h-20" />
                    </div>
                    <div className="flex-shrink-0">
                        <img src={BigPons} alt="Big Pons" className="partner-logo h-14 w-auto md:h-20" />
                    </div>
                    <div className="flex-shrink-0">
                        <img src={Par} alt="Patitas Al Rescate" className="partner-logo h-14 w-auto md:h-20" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;