import React from 'react'

const tecnologias = [
    { tecnologia: 'Git', logo: 'placeholder', descrip: 'Software de control de versiones' },
    { tecnologia: '.Net', logo: 'placeholder', descrip: 'Framework de Microsoft' },
    { tecnologia: 'Java', logo: 'placeholder', descrip: 'Lenguaje de programación' },
    { tecnologia: 'Node', logo: 'placeholder', descrip: 'Framework de back-end' },
    { tecnologia: 'React', logo: 'placeholder', descrip: 'Biblioteca de Javascript de código abierto' },
    { tecnologia: 'Angular', logo: 'placeholder', descrip: 'Framework para aplicaciones web' },
    { tecnologia: 'Azure Cloud', logo: 'placeholder', descrip: 'Plataforma de computación en la nube' },
    { tecnologia: 'Azure DevOps', logo: 'placeholder', descrip: 'Herramientas creadas para la nube'  }
];  

function Techstack() {
    return (
        <div className='py-20 tech-degrade'>
            <section className='flex flex-nowrap gap-0 mx-16'>
                <div
                className=" folder bg-white w-1/2 rounded-t-3xl py-16 bg-purple-200
                            text-left text-5xl font-[650] px-40 tracking-wide">
                    Tecnologías con las que trabajamos
                </div>
                <div
                className=" folder bg-[#C5B0FF] w-1/2 align-right py-24
                            font-semibold text-2xl text-center text-purple-500 tracking-wide ">
                    <p className='align-middle'>¿Buscas soluciones de alto impacto?</p>
                </div>
            </section>
            <div className="folder bg-white mx-16 rounded-b-3xl rounded-tr-3xl py-32 bg-purple-200">
                -
            </div>
        </div>
    )
}

export default Techstack