import React from 'react';
import BigPons from '../assets/bigpons.svg';
import Resumatio from '../assets/resumatio.svg';
import Par from '../assets/par-b.svg';

const Partners = () => {
    return (
        <div className="py-6 md:py-16" id="Partners">
            <div className="bg-[#AA8EFF] sm:bg-[#AF92FE] flex flex-col md:flex-row items-start px-5 md:px-32 py-8 md:py-12">
                <div className="flex-1 text-left mb-6 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Partners</h2>
                    <h3 className="text-2xl md:text-2xl tracking-wide text-violet-100 mt-1">Ellos confían en nosotros.</h3>
                </div>
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center mx-auto">
                    <div className="flex flex-row md:flex-1 justify-center space-x-10 md:space-x-28">
                        <div className="flex-shrink-0">
                            <img src={Resumatio} alt="Resumatio" className="partner-logo h-16 w-auto md:h-20" />
                        </div>
                        <div className="flex-shrink-0">
                            <img src={BigPons} alt="Big Pons" className="partner-logo h-16 w-auto md:h-20" />
                        </div>
                        <div className="flex-shrink-0">
                            <img src={Par} alt="Patitas Al Rescate" className="partner-logo h-16 w-auto md:h-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;