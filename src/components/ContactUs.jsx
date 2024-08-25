import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('EmailJS success:', response.text);
            setLoading(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setLoading(false);
        }
    };

    return (
        <div className='pt-3' id='ContactUs'>
            {/* Formulario para dispositivos móviles */}
            <form onSubmit={handleSubmit} className="block lg:hidden w-full max-w-md p-4 px-6">
                <h1 className="text-[#111827] font-semibold text-4xl sm:text-5xl mb-2 text-start">Contactanos</h1>
                <h2 className="text-[#EBE5FF] font-base text-2xl sm:text-3xl mb-6 text-start">Formulario de contacto.</h2>

                <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-1 rounded-3xl bg-[#9F7EFF] text-white font-light border-[#C6B4FE] outline-white mb-2 placeholder-[#1D1C24] text-lg pl-9"
                    required
                />

                <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-1 rounded-3xl bg-[#9F7EFF] text-white font-light border-[#C6B4FE] outline-white mb-2 placeholder-[#1D1C24] text-lg pl-9 mt-6"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-1 rounded-3xl bg-[#9F7EFF] text-white font-light border-[#C6B4FE] outline-white placeholder-[#1D1C24] text-lg pl-9 pt-4 mt-6"
                    rows="5"
                    required
                ></textarea>

                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className={`bg-[#EBE5FF] font-medium text-[#5C23FE] text-xl sm:text-2xl px-5 pb-1 pt-0.5 rounded-3xl hover:cursor-pointer w-auto
                        ${loading ? 'cursor-wait' : 'hover:bg-[#D1C9FF] hover:text-[#3C0FD8]'} 
                        ${submitted ? 'cursor-default' : ''}`}
                        disabled={loading || submitted}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                Enviando...
                                <svg className="animate-spin h-5 w-5 ml-3 -mr-2 mt-1 text-violet-500 " viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
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
            </form>

            {/* Formulario para escritorio */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center px-2 md:px-28 -pb-8 md:pb-24">
                <div className="hidden lg:block w-full md:w-1/2 p-4 mr-40">
                    <h1 className="text-[#EBE5FF] font-semibold text-6xl md:text-7xl">Contactanos</h1>
                    <div className="mt-6">
                        <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2.5 rounded-3xl bg-[#9F7EFF] text-white border-[#C6B4FE] outline-white mb-2 placeholder-[#1D1C24] text-xl mt-12 pl-12 font-thin"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded-3xl bg-[#9F7EFF] text-white border-[#C6B4FE] outline-white placeholder-[#1D1C24] text-xl mt-12 pl-12 pt-4 font-thin"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="hidden lg:block w-full md:w-1/2 p-4 flex flex-col">
                    <h2 className="text-[#5C24FF] font-medium text-3xl pl-12 mt-0 mb-[3.1rem]">Formulario de contacto.</h2>
                    <div className="mt-6">
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2.5 rounded-3xl bg-[#9F7EFF] text-white border-[#C6B4FE] outline-white placeholder-[#1D1C24] text-xl pl-12 pb-2.5 font-thin mt-8"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`bg-[#EBE5FF] font-medium text-[#5C23FE] text-2xl px-10 py-1.5 rounded-3xl hover:cursor-pointer mt-[13.3rem] w-min ml-2 transition transform
                ${loading ? 'cursor-wait' : 'hover:bg-[#D1C9FF] hover:text-[#3C0FD8]'} 
                ${submitted ? 'cursor-default' : ''}`}
                        disabled={loading || submitted}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                Enviando...
                                <svg className="animate-spin h-5 w-5 ml-3 -mr-2 mt-1 text-violet-500 " viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
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
            </form>
        </div>
    );
};

export default ContactUs;