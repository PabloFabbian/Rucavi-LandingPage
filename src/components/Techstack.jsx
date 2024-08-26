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
    { tecnologia: 'React', logo: LOGO5, descrip: 'Biblioteca Javascript de código abierto' },
    { tecnologia: 'Angular', logo: LOGO6, descrip: 'Framework para aplicaciones web' },
    { tecnologia: 'Azure Cloud', logo: LOGO7, descrip: 'Plataforma de computación en la nube' },
    { tecnologia: 'Azure DevOps', logo: LOGO8, descrip: 'Herramientas creadas para la nube' }
];

function Techstack() {
    return (
        <div className="pb-6 md:pb-20" id="TechStack">
            <section className="flex flex-wrap gap-0 sm:mx-8 px-auto mx-4">
                <div className="flex justify-center items-center w-full sm:w-1/2 rounded-t-3xl pt-6 sm:pt-20 sm:pb-6 bg-[#EBE5FF] px-2 sm:px-40">
                    <p className="text-[1.6rem] sm:text-4xl lg:text-5xl font-semibold px-6 md:px-0 text-left">
                        Tecnologías con las que trabajamos
                    </p>
                </div>
                <div className='bg-[#EBE5FF] w-full sm:w-1/2 flex items-start justify-center'>
                    <div className="folderGradient w-full h-full flex items-center justify-start md:justify-center rounded-bl-3xl bg-[#C8B3FF] bg-clip-border border border-[#EBE5FF] md:border-none">
                        <p className="font-medium text-sm sm: md:text-2xl text-center text-[#7D51FF] px-7 py-2 md:px-0">
                            ¿Buscas soluciones de alto impacto?
                        </p>
                    </div>
                </div>
            </section>

            <div
                className="rounded-b-3xl rounded-tr-none md:rounded-tr-3xl bg-[#EBE5FF]
                mx-4 sm:mx-8 px-0 md:px-[10px] py-0 md:py-16"
            >
                <div className="carousel-wrapper pb-6 pt-4">
                    <div className="carousel">
                        {tecnologias.map((tech, index) => {
                            const isMobile = window.innerWidth <= 768;
                            const wordCount = isMobile ? 2 : 3;
                            const words = tech.descrip.split(' ');
                            const firstPart = words.slice(0, wordCount).join(' ');
                            const secondPart = words.slice(wordCount).join(' ');

                            return (
                                <div key={index} className="carousel-item">
                                    <img src={tech.logo} alt={tech.tecnologia} className="carousel-logo" />
                                    <div className="carousel-text">
                                        <h5 className="text-[#5C24FF] text-[1rem] md:text-[1.6rem] font-bold -leading-6 md:leading-6 pb-0 md:pb-2">{tech.tecnologia}</h5>
                                        <p className="text-[#9571FF] text-xs md:text-base leading-3 md:leading-4 text-balance">
                                            {firstPart}
                                            <span className="block">{secondPart}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {tecnologias.map((tech, index) => {
                            const isMobile = window.innerWidth <= 768;
                            const wordCount = isMobile ? 2 : 3;
                            const words = tech.descrip.split(' ');
                            const firstPart = words.slice(0, wordCount).join(' ');
                            const secondPart = words.slice(wordCount).join(' ');

                            return (
                                <div key={index + tecnologias.length} className="carousel-item">
                                    <img src={tech.logo} alt={tech.tecnologia} className="carousel-logo" />
                                    <div className="carousel-text">
                                        <h5 className="text-[#5C24FF] text-[1rem] md:text-[1.6rem] font-bold -leading-6 md:leading-6 pb-0 md:pb-2">{tech.tecnologia}</h5>
                                        <p className="text-[#9571FF] text-xs md:text-base leading-3 md:leading-4 text-balance">
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