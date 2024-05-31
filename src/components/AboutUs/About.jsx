import React from 'react'

function About() {
    return (
        <body>
            <div className="sobreNosotros">
                <h1 className='text-3xl text-indigo-600 font-bold'>Sobre Nosotros</h1>
                <div className=''>
                    <img className='flecha'></img>
                    <h2 className='text-xl font-semibold text-violet-500'>[Consultoría de sistemas de información]</h2>
                    <p><span className='font-bold'></span></p>
                    <p></p>
                    <p><span className='font-bold'></span></p>
                </div>
                <button className='SinergiaButton'></button>
            </div>
            <div className="sobreLaEmpresa">
                <h1 className='text-3xl text-indigo-600 font-bold'>Cómo nace la empresa</h1>
                <div className=''>
                    <img className='flecha'></img>
                    <h2 className='text-xl font-semibold text-violet-500'>[La unión de un grupo]</h2>
                    <p><span className='font-bold'></span></p>
                    <p></p>
                    <p></p>
                </div>
                <button className='EquipoButton'></button>
            </div>
            <div className="sobreServicios">
                <h1 className='text-3xl text-indigo-600 font-bold'>¿Qué es lo que hacemos?</h1>
                <div className=''>
                    <img className='flecha'></img>
                    <h2 className='text-xl font-semibold text-violet-500'>[Desarrollo de soluciones tecnológicas]</h2>
                    <p></p>
                    <p><span className='font-bold'></span></p>
                    <p></p>
                </div>
                <button className='SolucionesButton'></button>
            </div>
        </body>
    )
}

export default About