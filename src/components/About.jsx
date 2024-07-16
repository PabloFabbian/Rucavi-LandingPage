import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import WhiteArrowIcon from '../assets/WhiteArrowIcon.svg'
import VioletArrowIcon from '../assets/violetArrowIcon.svg'

gsap.registerPlugin(ScrollTrigger);

function About() {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const lineRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const sections = sectionsRef.current;

        // Calcula el ancho total de todas las secciones
        let totalWidth = 0;
        sections.forEach(section => {
            totalWidth += section.offsetWidth;
        });

        gsap.to(sections, {
            xPercent: -50 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 0.6,
                end: () => `+=${totalWidth - container.offsetWidth}`,
            },
        });

        // Animación para la línea
        gsap.to(lineRef.current, {
            xPercent: -20 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                scrub: 0.6,
                start: 'top top',
                end: () => `+=${totalWidth - container.offsetWidth}`,
            },
        });
    }, []);

    const SmallButton = ({ children }) => {
        return (
            <button className="bg-purple-200 text-indigo-600 font-semibold rounded-2xl mt-20 px-4 py-2 hover:bg-purple-300 transition-colors duration-300 ease-in-out">
                {children}
            </button>
        );
    };

    return (
        <div className='about-degrade overflow-hidden relative py-14 pt-[60px] pl-14' id='AboutUs' ref={containerRef}>
            {/* Línea horizontal que indica el ancho */}
            <div ref={lineRef} className='sticky top-[10.5rem] left-0 w-[calc(49.5rem*3)] h-0.5 bg-gray-500 ml-48'></div>

            <div className="flex py-20 w-full">
                {/* Primera tarjeta - Sobre Nosotros */}
                <section className="sections py-4 px-48 min-w-[54rem]" ref={(el) => sectionsRef.current[0] = el}>
                    <h1 className="text-5xl text-indigo-600 font-bold mb-5">Sobre Nosotros</h1>
                    <div className="text-[#9471FF] mt-12">
                        <img src={WhiteArrowIcon} style={{ position: 'absolute', left: '8rem', top: '7.3rem', height: '1.5rem', width: '1.5rem' }} />
                        <h2 className="text-2xl font-semibold text-violet-500 mb-8">[Consultoría de sistemas de información]</h2>
                        <p className="mb-4 text-xl">En RUCAVI nos definimos no solo como una empresa de consultoría de sistemas de información, sino como un equipo donde
                            <span className="font-bold text-[#7D51FE]"> la colaboración con nuestros clientes es fundamental.</span>
                        </p>
                        <p className="mb-4 text-xl">Nos consideramos un socio estratégico en el camino hacia el éxito tecnológico, integrando a nuestros colaboradores en cada etapa del proceso.</p>
                        <p className="mb-4 text-xl">Con un enfoque centrado en el cliente y una pasión por la innovación, en RUCAVI estamos comprometidos a Brindar un
                            <span className="font-bold text-[#7D51FE]"> servicio de excelencia </span>
                            que se adapte a las necesidades específicas de cada proyecto.
                        </p>
                    </div>
                    <SmallButton>SINERGIA</SmallButton>
                </section>

                {/* Segunda tarjeta - Cómo nace la empresa */}
                <section className="sections py-4 px-48 min-w-[54rem]" ref={(el) => sectionsRef.current[1] = el}>
                    <h1 className="text-5xl text-indigo-600 font-bold mb-5 whitespace-nowrap">Cómo nace la empresa</h1>
                    <div className="text-[#9471FF] mt-12">
                        <img src={WhiteArrowIcon} style={{ position: 'absolute', left: '8rem', top: '7.3rem', height: '1.5rem', width: '1.5rem' }} />
                        <h2 className="text-2xl font-semibold text-violet-500 mb-8">[La unión de un grupo]</h2>
                        <p className="mb-4 text-xl">RUCAVI tiene sus raíces en la unión de un
                            <span className="font-bold text-[#7D51FE]"> grupo de amigos que comparten una pasión por la tecnología.</span>
                            Lo que comenzó como una idea entre compañeros se convirtió en una empresa dedicada a ofrecer soluciones tecnológicas confiables y efectivas.
                        </p>
                        <p className="mb-4 text-xl">Nuestro equipo, formado por profesionales comprometidos, combina la experiencia y el conocimiento para abordar los desafíos de nuestros clientes con confianza y diligencia.</p>
                        <p className="mb-4 text-xl">En RUCAVI nos enorgullece contar con un equipo que prioriza la satisfacción del cliente y la excelencia en cada proyecto que emprendemos.</p>
                    </div>
                    <SmallButton>EQUIPO</SmallButton>
                    <img src={VioletArrowIcon} style={{ position: 'absolute', left: '45rem', top: '40.25rem', height: '3rem', width: '3rem' }} />
                </section>

                {/* Tercera tarjeta - Sobre Servicios */}
                <section className="sections py-4 px-48 min-w-[54rem]" ref={(el) => sectionsRef.current[2] = el}>
                    <h1 className="text-5xl text-indigo-600 font-bold mb-5 whitespace-nowrap">¿Qué es lo que hacemos?</h1>
                    <div className="text-[#9471FF] mt-12">
                        <img src={WhiteArrowIcon} style={{ position: 'absolute', left: '8rem', top: '7.3rem', height: '1.5rem', width: '1.5rem' }} />
                        <h2 className="text-2xl font-semibold text-violet-500 mb-8">[Desarrollo de soluciones tecnológicas]</h2>
                        <p className="mb-4 text-xl">Nuestro objetivo en RUCAVI es desarrollar soluciones tecnológicas de vanguardia que desafíen los límites y potencien el crecimiento empresarial.</p>
                        <p className="mb-4 text-xl">Nuestro equipo de profesionales trabaja incansablemente para brindar
                            <span className="font-bold text-[#7D51FE]"> un servicio excepcional que se adapte a las necesidades únicas de cada cliente</span>
                            , ya sea el diseño de sistemas personalizados o la implementación de soluciones innovadoras.
                        </p>
                        <p className="-mb-3.5 text-xl">En un mundo digital en constante evolución, nos sentimos honrados de ser líderes en la adopción de tecnologías emergentes
                            y su utilización para impulsar el éxito de nuestros clientes.
                        </p>
                    </div>
                    <SmallButton>SOLUCIONES</SmallButton>
                </section>
            </div>
        </div>
    );
}

export default About;