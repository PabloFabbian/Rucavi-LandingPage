import React from 'react';
import LOGO1 from '../assets/Logos/git.svg';
import LOGO2 from '../assets/Logos/.net.svg';
import LOGO3 from '../assets/Logos/java.svg';
import LOGO4 from '../assets/Logos/nodejs.svg';
import LOGO5 from '../assets/Logos/react.svg';
import LOGO6 from '../assets/Logos/angular.svg';
import LOGO7 from '../assets/Logos/azure_cloud.svg';
import LOGO8 from '../assets/Logos/azure_devops.svg';

const tecnologias = [
    { tecnologia: 'Git', logo: LOGO1, descrip: 'Software de control de versiones' },
    { tecnologia: '.Net', logo: LOGO2, descrip: 'Framework de Microsoft' },
    { tecnologia: 'Java', logo: LOGO3, descrip: 'Lenguaje de programación' },
    { tecnologia: 'Node', logo: LOGO4, descrip: 'Framework de back-end' },
    { tecnologia: 'React', logo: LOGO5, descrip: 'Biblioteca de Javascript de código abierto' },
    { tecnologia: 'Angular', logo: LOGO6, descrip: 'Framework para aplicaciones web' },
    { tecnologia: 'Azure Cloud', logo: LOGO7, descrip: 'Plataforma de computación en la nube' },
    { tecnologia: 'Azure DevOps', logo: LOGO8, descrip: 'Herramientas creadas para la nube' }
];

function Techstack() {
    return (
        <div className='pb-20 tech-degrade' id='TechStack'>
            <section className='flex flex-nowrap gap-0 mx-16'>
                <div className="folder w-1/2 rounded-t-3xl pt-16 pb-10 bg-[#EBE5FF] text-left text-5xl font-[650] px-40 tracking-wide leading-12">
                    Tecnologías con las que trabajamos
                </div>
                <div className='bg-[#EBE5FF] w-1/2 flex items-center justify-center'>
                    <div className="folder folder-degrade w-full h-full flex items-center justify-center rounded-bl-3xl bg-[#C8B3FF] bg-clip-border font-semibold text-2xl text-center text-purple-500 tracking-wide">
                        <p>¿Buscas soluciones de alto impacto?</p>
                    </div>
                </div>
            </section>
            <div className="folder mx-16 rounded-b-3xl rounded-tr-3xl py-16 bg-[#EBE5FF]">
                <div className="carousel-wrapper">
                    <div className="carousel">
                        {tecnologias.map((tech, index) => {
                            const words = tech.descrip.split(' ');
                            const firstPart = words.slice(0, 3).join(' ');
                            const secondPart = words.slice(3).join(' ');

                            return (
                                <div key={index} className="carousel-item">
                                    <img src={tech.logo} alt={tech.tecnologia} className="carousel-logo" />
                                    <div className="carousel-text">
                                        <h5 className="text-[#5C24FF] text-[1.6rem] font-bold leading-6 pb-2">{tech.tecnologia}</h5>
                                        <p className="text-[#9571FF] leading-4 text-balance">
                                            {firstPart}
                                            <span className="block">{secondPart}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                        {/* Duplicate the elements to create the infinite effect */}
                        {tecnologias.map((tech, index) => {
                            const words = tech.descrip.split(' ');
                            const firstPart = words.slice(0, 3).join(' ');
                            const secondPart = words.slice(3).join(' ');

                            return (
                                <div key={index + tecnologias.length} className="carousel-item">
                                    <img src={tech.logo} alt={tech.tecnologia} className="carousel-logo" />
                                    <div className="carousel-text">
                                        <h5 className="text-[#5C24FF] text-[1.6rem] font-bold leading-6 pb-2">{tech.tecnologia}</h5>
                                        <p className="text-[#9571FF] leading-4 text-balance">
                                            {firstPart}
                                            <span className="block">{secondPart}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techstack;