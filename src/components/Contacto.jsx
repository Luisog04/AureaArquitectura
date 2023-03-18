

const Contacto = () => {
    return (
        <div className=" container mx-auto my-5">
            <div>
                <img className=" md:mx-auto " src="/img/logo1.JPG" alt="imagen logo" />

                <form className=" w-11/12 md:w-full max-w-lg mx-auto my-5 bg-gray-200 items-center shadow-xl" action="">
                    <h3 className="text-center text-2xl md:text-4xl font-black p-2 my-3 text-emerald-800">Contáctanos</h3>

                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="nombre">Nombre</label>
                        <input className="w-full border-4 rounded px-5 py-2  text-gray-700" id="nombre" type="text" placeholder="Tu Nombre" name="nombre" />
                    </div>
                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="telefono">Teléfono</label>
                        <input className="w-full border-4 rounded px-5 py-2 text-gray-700" id="telefono" type="text" placeholder="Tu Teléfono" name="telefono" />
                    </div>
                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="correo">Correo</label>
                        <input className="w-full border-4 rounded px-5 py-2 text-gray-700" id="correo" name="correo" type="text" placeholder="Tu Correo Electrónico" />
                    </div>
                    <div className="mb-4 mx-2 md:mx-10">
                        <label className="block text-emerald-800 text-xl md:text-2xl font-bold mb-2" htmlFor="mensaje">Mensaje</label>
                        <textarea className="w-full border-4 rounded px-5 py-2 text-gray-700" id="mensaje" name="mensaje" placeholder="¿En qué podemos ayudarte?" cols="20" rows="10"></textarea>
                    </div>
                    <div className="mb-4 my-3 mx-2 md:mx-10">
                        <input className=" bg-emerald-700 hover:bg-emerald-900 w-2/3 py-3 text-2xl text-white font-bold  items-center mx-auto mb-5 rounded-xl" type="submit" value="Enviar" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contacto