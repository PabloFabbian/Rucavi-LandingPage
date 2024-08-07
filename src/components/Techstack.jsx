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
    { tecnologia: 'React', logo: LOGO5, descrip: 'Biblioteca de Javascript' },
    { tecnologia: 'Angular', logo: LOGO6, descrip: 'Framework para aplicaciones web' },
    { tecnologia: 'Azure Cloud', logo: LOGO7, descrip: 'Plataforma de computación en la nube' },
    { tecnologia: 'Azure DevOps', logo: LOGO8, descrip: 'Herramientas creadas para la nube' }
];

function Techstack() {
    return (
        <div className="pb-20 sm:pt-20 tech-degrade" id="TechStack">
            <section className="flex flex-wrap gap-0 sm:mx-16 px-auto mx-4">
                <div className="folder flex justify-between w-full sm:w-1/2 rounded-t-3xl pt-16 pb-10 bg-[#EBE5FF] px-10 sm:px-40">
                    <p className="text-2xl sm:text-5xl font-[650] tracking-normal md:tracking-wide leading-8 sm:leading-12 px-4 md:px-0">
                        Tecnologías con las que <span className='text-left'>trabajamos</span>
                    </p>
                </div>
                <div className='bg-[#EBE5FF] w-full sm:w-1/2 flex items-start justify-center'>
                    <div className="folder folder-degrade w-full h-full flex items-center justify-start md:justify-center rounded-bl-3xl bg-[#C8B3FF] bg-clip-border">
                        <p className="font-semibold text-base sm:text-2xl text-center text-purple-500 tracking-wide">
                            ¿Buscas soluciones de alto impacto?
                        </p>
                    </div>
                </div>
            </section>

            <div className="folder mx-4 sm:mx-16 rounded-b-3xl rounded-tr-none md:rounded-tr-3xl md:py-16 bg-[#EBE5FF]">
                <div className="carousel-wrapper py-6">
                    <div className="carousel">
                        {tecnologias.map((tech, index) => {
                            // Determine the number of words to show based on the viewport width
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
                                        <p className="text-[#9571FF] text-[0.75rem] md:text-base leading-3 md:leading-4 text-balance">
                                            {firstPart}
                                            <span className="block">{secondPart}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                        {/* Duplicate the elements to create the infinite effect */}
                        {tecnologias.map((tech, index) => {
                            // Determine the number of words to show based on the viewport width
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
                                        <p className="text-[#9571FF] text-[0.75rem] md:text-base leading-3 md:leading-4 text-balance">
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