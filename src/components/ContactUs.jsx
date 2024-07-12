import React, { useState } from 'react';
import Rucavi from '../assets/Rucavi-white-txt.svg';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Aquí puedes agregar la lógica para enviar el formulario al backend
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            console.log('Form data submitted:', formData);
            // Restablecer el formulario y el estado después de 3 segundos
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        }, 2000);
    };

    return (
        <div className='contactus-degrade' id='ContactUs'>
            <div className="flex flex-col md:flex-row items-center justify-center px-28 pb-24">
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-4 mr-24">
                    <h1 className="text-[#EBE5FF] font-bold text-7xl">Contactanos</h1>
                    <div className="mb-6 ">
                        <p className="text-[#1D1C24] text-xl mt-12 mb-6">Nombre</p>
                        <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2.5 rounded-2xl bg-[#9F7EFF] text-white border-[#C6B4FE] outline-white mb-[4.4rem] "
                            required
                        />
                    </div>
                    <div className="mb-6 ">
                        <p className="text-[#1D1C24] text-xl mb-6">Email</p>
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2.5 rounded-2xl bg-[#9F7EFF] text-white border-[#C6B4FE] outline-white mb-14"
                            required
                        />
                    </div>
                </form>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-[#5C24FF] font-semibold text-3xl mt-20">Formulario de contacto.</h2>
                    <div className="mb-6 ">
                        <p className="text-[#1D1C24] text-xl mt-12 mb-6">Mensaje</p>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded-3xl bg-[#9F7EFF] text-white border-[#C6B4FE] outline-white"
                            rows="9"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={`bg-[#EBE5FF] font-medium text-[#5C23FE] text-2xl px-7 pb-1.5 pt-1 rounded-2xl mt-14 hover:cursor-pointer
                        ${loading ? 'cursor-wait' : 'hover:bg-[#D1C9FF] hover:text-[#3C0FD8]'} 
                        ${submitted ? 'cursor-default' : ''}`}
                        disabled={loading || submitted}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                Cargando...
                                <svg className="animate-spin h-5 w-5 ml-3 -mr-2 mt-1 text-violet-500 " viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" currentColor="4" fill="none" />
                                    <path fill="currentColor" d="M4 12a8 8 0 0116 0h2a10 10 0 10-20 0h2z" />
                                </svg>
                            </div>
                        ) : submitted ? (
                            <div className="flex items-center justify-center">
                                ¡Enviado!
                                <svg className="h-6 w-6 ml-3 -mr-2 mt-1 text-green-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        ) : (
                            'Enviar'
                        )}
                    </button>
                </div>
            </div>
            <hr className="border-[#EBE6FD] mx-32" />
            <div className='pt-8 pb-10 pl-[16rem]'>
                <img src={Rucavi} alt="Rucavi" className="w-full h-8" />
            </div>
        </div>
    );
};

export default ContactUs;