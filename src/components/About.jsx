import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import WhiteArrowIcon from '../assets/WhiteArrowIcon.svg';
import VioletArrowIcon from '../assets/violetArrowIcon.svg';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const lineRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const sections = sectionsRef.current;

        let totalWidth = 0;
        sections.forEach((section) => {
            totalWidth += section.offsetWidth;
        });

        const isMobile = window.matchMedia('(max-width: 599px)').matches;
        const isTablet = window.matchMedia('(min-width: 600px) and (max-width: 1109px)').matches;
        const isLaptop = window.matchMedia('(min-width: 1110px) and (max-width: 1650px)').matches;

        if (isMobile) {
            // Animation for Mobile --------------------------------------------------------------------------------
            gsap.to(sections, {
                xPercent: -105 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 0.6,
                    end: () => `+=${totalWidth - container.offsetWidth}`,
                },
            });

            gsap.to(lineRef.current, {
                xPercent: -33.33 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: 0.6,
                    start: 'top top',
                    end: () => `+=${totalWidth - container.offsetWidth}`,
                },
            });
        } else if (isTablet) {
            // Animation for Tablets ------------------------------------------------------------------------------- 
            const sectionWidth = container.offsetWidth / sections.length;
            const scrollSpeed = 0.75;
            const additionalScroll = 2;

            gsap.to(sections, {
                xPercent: -67.5 * (sections.length + 1.5),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: scrollSpeed,
                    end: () => `+=${totalWidth - container.offsetWidth + additionalScroll * sectionWidth}`,
                },
            });

            gsap.to(lineRef.current, {
                xPercent: -36.01 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: scrollSpeed,
                    start: 'top top',
                    end: () => `+=${totalWidth - container.offsetWidth + additionalScroll * sectionWidth}`,
                },
            });
        } else if (isLaptop) {
            // Animation for Laptops --------------------------------------------------------------------------------
            const sectionWidth = container.offsetWidth / sections.length;
            const additionalScroll = 2;

            gsap.to(sections, {
                xPercent: -120 * (sections.length - 0.8),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 0.75,
                    end: () => `+=${totalWidth - container.offsetWidth + 800}`,
                },
            });

            gsap.to(lineRef.current, {
                xPercent: -15.8002 * (sections.length + 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: 0.75,
                    start: 'top top',
                    end: () => `+=${totalWidth - container.offsetWidth + additionalScroll * sectionWidth}`,
                },
            });
        } else {
            // Animation for Desktops -------------------------------------------------------------------------------
            const sectionWidth = container.offsetWidth / sections.length;
            const scrollSpeed = 0.75;
            const additionalScroll = 2;

            gsap.to(sections, {
                xPercent: -70 * (sections.length - 0.5),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: scrollSpeed,
                    end: () => `+=${totalWidth - container.offsetWidth + additionalScroll * sectionWidth}`,
                },
            });

            gsap.to(lineRef.current, {
                xPercent: -10.6 * (sections.length + 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: scrollSpeed,
                    start: 'top top',
                    end: () => `+=${totalWidth - container.offsetWidth + additionalScroll * sectionWidth}`,
                },
            });
        }
    }, []);

    const SmallButton = ({ children, className }) => (
        <button className={`bg-purple-200 text-indigo-600 font-semibold rounded-2xl mt-10 sm:mt-20 px-4 pb-1 pt-1.5 hover:bg-purple-300 hover:cursor-default transition-colors duration-300 ease-in-out text-xs md:text-base ${className}`}>
            {children}
        </button>
    );

    return (
        <div className="overflow-hidden relative sm:pt-[60px] pl-1 sm:pl-14 z-10 -mt-32 sm:-mt-20" id="AboutUs" ref={containerRef}>
            <div ref={lineRef} className="sticky top-[7.8rem] md:top-[9rem] lg:top-[10.5rem] left-0 w-[calc(21.5rem*3)] lg:w-[calc(48.5rem*3)] h-0.5 bg-gray-500 ml-6 md:ml-10 lg:ml-44"></div>

            <div className="flex pt-16 pb-10 md:py-14 lg:py-20 md:px-10 lg:px-44 w-full space-x-4 sm:space-x-80">
                <section className="sections py-4 px-5 sm:px-0 mx-0 sm:mx-0 min-w-[100vw] md:min-w-[35rem]" ref={(el) => (sectionsRef.current[0] = el)}>
                    <h1 className="text-3xl md:text-5xl text-indigo-600 font-semibold -mb-5 sm:mb-5">Sobre Nosotros</h1>
                    <div className="text-[#9471FF] mt-12">
                        <img src={WhiteArrowIcon} className="absolute left-1 md:-left-16 top-[5.4rem] md:top-[7.3rem] h-3 w-3 sm:h-5 sm:w-5" />
                        <h2 className="text-base md:text-2xl font-medium text-violet-500 mb-4 sm:mb-8">[Consultoría de sistemas de información]</h2>
                        <p className="mb-4 text-sm md:text-xl">
                            En RUCAVI nos definimos no solo como una empresa de consultoría de sistemas de información, sino como un equipo donde
                            <span className="font-semibold text-[#7D51FE]"> la colaboración con nuestros clientes es fundamental.</span>
                        </p>
                        <p className="mb-4 text-sm md:text-xl">Nos consideramos un socio estratégico en el camino hacia el éxito tecnológico, integrando a nuestros colaboradores en cada etapa del proceso.</p>
                        <p className="mb-4 text-sm md:text-xl">
                            Con un enfoque centrado en el cliente y una pasión por la innovación, en RUCAVI estamos comprometidos a Brindar un
                            <span className="font-semibold text-[#7D51FE]"> servicio de excelencia </span>
                            que se adapte a las necesidades específicas de cada proyecto.
                        </p>
                    </div>
                    <SmallButton>SINERGIA</SmallButton>
                </section>
                <section className="sections py-4 px-5 sm:px-0 mx-6 sm:mx-0 min-w-[100vw] md:min-w-[35rem]" ref={(el) => (sectionsRef.current[1] = el)}>
                    <h1 className="text-3xl md:text-5xl text-indigo-600 font-semibold -mb-5 sm:mb-5 whitespace-nowrap">Cómo nace la empresa</h1>
                    <div className="text-[#9471FF] mt-12 -mb-7">
                        <img src={WhiteArrowIcon} className="absolute left-1 md:-left-16 top-[5.4rem] md:top-[7.3rem] h-3 w-3 sm:h-5 sm:w-5" />
                        <h2 className="text-base md:text-2xl font-medium text-violet-500 mb-4 sm:mb-8">[La unión de un grupo]</h2>
                        <p className="mb-4 text-sm md:text-xl">
                            RUCAVI tiene sus raíces en la unión de un
                            <span className="font-semibold text-[#7D51FE]"> grupo de amigos que comparten una pasión por la tecnología. </span>
                            Lo que comenzó como una idea entre compañeros se convirtió en una empresa dedicada a ofrecer soluciones tecnológicas confiables y efectivas.
                        </p>
                        <p className="mb-4 text-sm md:text-xl">Nuestro equipo, formado por profesionales comprometidos, combina la experiencia y el conocimiento para abordar los desafíos de nuestros clientes con confianza y diligencia.</p>
                        <p className="mb-4 text-sm md:text-xl">En RUCAVI nos enorgullece contar con un equipo que prioriza la satisfacción del cliente y la excelencia en cada proyecto que emprendemos.</p>
                    </div>
                    <SmallButton>EQUIPO</SmallButton>
                    <img src={VioletArrowIcon} className="absolute -left-[6rem] md:left-[33rem] top-[28.5rem] md:top-[38rem] h-12 w-12" />
                </section>
                <section className="sections py-4 px-5 sm:px-0 mx-0 sm:mx-0 min-w-[100vw] md:min-w-[35rem]" ref={(el) => (sectionsRef.current[2] = el)}>
                    <h1 className="text-3xl md:text-5xl text-indigo-600 font-semibold -ml-4 sm:-ml-7 -mb-5 sm:mb-5 whitespace-nowrap">¿Qué es lo que hacemos?</h1>
                    <div className="text-[#9471FF] mt-12 sm:-mb-7">
                        <img src={WhiteArrowIcon} className="absolute left-1 md:-left-16 top-[5.4rem] md:top-[7.3rem] h-3 w-3 sm:h-5 sm:w-5" />
                        <h2 className="text-base md:text-2xl font-medium text-violet-500 mb-4 sm:mb-8">[Desarrollo de soluciones tecnológicas]</h2>
                        <p className="mb-4 text-sm md:text-xl">Nuestro objetivo en RUCAVI es desarrollar soluciones tecnológicas de vanguardia que desafíen los límites y potencien el crecimiento empresarial.</p>
                        <p className="mb-4 text-sm md:text-xl">
                            Nuestro equipo de profesionales trabaja incansablemente para brindar
                            <span className="font-semibold text-[#7D51FE]"> un servicio excepcional que se adapte a las necesidades únicas de cada cliente</span>
                            , ya sea a través del desarrollo de software personalizado, consultoría tecnológica o soluciones integradas.
                        </p>
                        <p className="mb-4 text-sm md:text-xl">En RUCAVI, cada proyecto es una oportunidad para demostrar nuestra dedicación a la innovación y la excelencia.</p>
                    </div>
                    <SmallButton>SOLUCIONES</SmallButton>
                </section>
            </div>
        </div>
    );
}

export default About;