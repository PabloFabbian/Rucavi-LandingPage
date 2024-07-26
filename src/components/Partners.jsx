import React, { useEffect, useRef } from 'react';
import BigPons from '../assets/bigpons.svg';
import Resumatio from '../assets/resumatio.svg';
import Par from '../assets/par-b.svg';

const Partners = () => {
    const imagesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, entry.target.dataset.delay);
                }
            });
        }, {
            threshold: 0.1
        });

        imagesRef.current.forEach(img => {
            if (img) {
                observer.observe(img);
            }
        });

        return () => {
            imagesRef.current.forEach(img => {
                if (img) {
                    observer.unobserve(img);
                }
            });
        };
    }, []);

    return (
        <div className='partners-degrade py-16' id='Partners'>
            <div className="bg-[#AF92FE] flex flex-row items-start px-32 py-12">
                <div className="flex-1 text-left">
                    <h2 className="text-5xl font-bold text-gray-900">Partners</h2>
                    <h3 className="text-2xl tracking-wide text-violet-100 mt-2">Ellos confían en nosotros.</h3>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="h-full flex items-center space-x-28">
                        <img ref={el => imagesRef.current[0] = el} data-delay="0" src={BigPons} alt="Big Pons" className="partner-logo h-20 w-auto hover:scale-105 hover:cursor-pointer" />
                        <img ref={el => imagesRef.current[1] = el} data-delay="300" src={Resumatio} alt="Resumatio" className="partner-logo h-20 w-auto hover:scale-105 hover:cursor-pointer" />
                        <img ref={el => imagesRef.current[2] = el} data-delay="600" src={Par} alt="Patitas Al Rescate" className="partner-logo h-20 w-auto hover:scale-105 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
