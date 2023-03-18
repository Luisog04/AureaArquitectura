

const Nosotros = () => {
    return (
        <div className=' container mx-auto xl:pt-80'>
            <h1 className="text-center text-3xl font-black p-3 mb-2">
                ¿Quienes somos?
            </h1>
            <div className="lg:flex">
                <img className="p-6 lg:w-1/3 mx-auto text-center shadow-xl" src="/img/nosotros.JPG" alt="Imagen Nosotros" />
                <div className="flex lg:w-2/3 flex-col justify-center items-center px-10 shadow-xl">
                    <p className="text-xl md:text-2xl font-semibold px-5 my-3 text-center ">Somos una empresa arquitectónica que brinda
                        soluciones constructivas de estilo tropical en Costa
                        Rica.</p>
                    <p className="text-xl md:text-2xl font-semibold px-5 my-3 text-center ">
                        Nuestro trabajo se desarrolla bajo los pilares
                        esenciales de la fortaleza, innovación y belleza para
                        garantizar obras modernas que impacten lo menos
                        posible el medio ambiente y lo mayor posible en los
                        sentidos de nuestros clientes.
                    </p>
                    <p className="text-xl md:text-2xl font-semibold px-5 my-3 text-center ">
                        Es por eso que con ÁUREA buscamos crear una
                        imagen elegante, minimalista, fresca, moderna y
                        sobria tomando en cuenta tres conceptos
                        inamovibles: lo natural, lo construído y los usuarios .

                    </p>
                </div>
            </div>

        </div >
    )
}

export default Nosotros