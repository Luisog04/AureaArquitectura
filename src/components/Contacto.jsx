import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

import Error from "./Error"

const Contacto = ({ contactoref }) => {

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [error, setError] = useState(false)

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validación del formulario
        if ([nombre, telefono, correo, mensaje].includes('')) {
            setError(true)
            return;
        }

        setError(false)


        await emailjs.sendForm('service_qei9rzo', 'template_j0up4i8', form.current, 'yN8b365YwO_0Iaj9u')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        alert('Mensaje enviado exitosamente')

        setNombre('')
        setCorreo('')
        setTelefono('')
        setMensaje('')
        
        

    }



    return (
        <div ref={contactoref} className=" container mx-auto my-5">
            <div>
                <img className=" md:mx-auto " src="/img/logo1.JPG" alt="imagen logo" />

                <form
                    ref={form}
                    method="post"
                    onSubmit={handleSubmit}
                    className=" w-11/12 md:w-full max-w-lg mx-auto my-5 bg-gray-200 items-center shadow-xl" >
                    <h3 className="text-center text-2xl md:text-4xl font-black p-2 my-3 text-emerald-800">Contáctanos</h3>

                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="nombre">Nombre</label>
                        <input
                            className="w-full border-4 rounded px-5 py-2  text-gray-700"
                            id="nombre"
                            type="text"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            placeholder="Tu Nombre"
                            name="nombre" />
                    </div>
                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="telefono">Teléfono</label>
                        <input
                            className="w-full border-4 rounded px-5 py-2 text-gray-700"
                            id="telefono"
                            type="text"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            placeholder="Tu Teléfono"
                            name="telefono" />
                    </div>
                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="correo">Correo</label>
                        <input
                            className="w-full border-4 rounded px-5 py-2 text-gray-700"
                            id="correo"
                            name="correo"
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                            type="text"
                            placeholder="Tu Correo Electrónico" />
                    </div>
                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="mensaje">Mensaje</label>
                        <textarea
                            className="w-full border-4 rounded px-5 py-2 text-gray-700"
                            id="mensaje"
                            value={mensaje}
                            onChange={e => setMensaje(e.target.value)}
                            name="mensaje"
                            placeholder="¿En qué podemos ayudarte?" cols="20" rows="10"></textarea>
                    </div>
                    <div className="mb-4 my-3 mx-2 md:mx-10 ">
                        <input className=" bg-emerald-700 hover:bg-emerald-900 w-2/3 py-3 text-2xl text-white font-bold  items-center mx-auto mb-5 rounded-xl" type="submit" value="Enviar" />
                        {error && <Error children={'Todos los campos son obligatorios'} />}

                    </div>


                </form>


            </div>

            <div>
                <h3 className="text-xl md:text-2xl text-center py-5 px-20">También nos puedes contactar en nuestras {''} <span className="text-emerald-800">Redes Sociales</span></h3>

                <div className="flex justify-center items-center">
                    <a className="mx-10" href="https://api.whatsapp.com/send/?phone=50687466017&text&type=phone_number&app_absent=0"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#065f46" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                    </svg></a>
                    <a className="mx-10" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#065f46" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg> </a>
                    <a className="mx-10" href="https://instagram.com/aurea_tropical_arq?igshid=YmMyMTA2M2Y="><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#065f46" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg></a>
                </div>

            </div>
        </div>
    )
}

export default Contacto