

const Galeria = () => {
    return (
        <>

            <div className="text-center mt-10 text-3xl font-extrabold">
                <h2>Nuestros Proyectos</h2>
            </div>
            <div className="lg:flex justify-center items-center">
                <div className=" hidden lg:block mx-auto  lg:w-2/5 p-10 text-center">
                    <h3 className=" text-emerald-800 font-bold text-xl lg:text-2xl my-3"> Somos los que aman e buen vivir, el buen sentir, el entorno.</h3>
                    <p className="text-xl lg:text-2xl font-medium my-3">
                        Amamos el equilibrio entre lo que somos y lo que nos rodea. Equilibramos lo natural con lo que fluye
                    </p>
                    <p className="text-xl lg:text-2xl font-medium my-3">
                        Somos de los que apostamos a la magia de la perfección, a la simetría del universo y trabajamos para alcanzarlo
                    </p>

                </div>
                <div className="my-10 mx-auto lg:mx-5 lg:w-3/5 h-40 lg:h-80 flex container">
                    <img className=" w-10 lg:w-24 flex-grow object-cover opacity-80 transicion hover:cursor-crosshair hover:w-40 lg:hover:w-80 hover:opacity-100 hover:contrast-125" src="/img/galeria1.JPG" alt="Imagen Galeria" />
                    <img className="w-10 lg:w-24 flex-grow object-cover opacity-80 transicion hover:cursor-crosshair hover:w-40 lg:hover:w-80 hover:opacity-100 hover:contrast-125" src="/img/galeria2.JPG" alt="Imagen Galeria" />
                    <img className="w-10 lg:w-24 flex-grow object-cover opacity-80 transicion hover:cursor-crosshair hover:w-40 lg:hover:w-80 hover:opacity-100 hover:contrast-125" src="/img/galeria3.JPG" alt="Imagen Galeria" />
                    <img className="w-10 lg:w-24 flex-grow object-cover opacity-80 transicion hover:cursor-crosshair hover:w-40 lg:hover:w-80 hover:opacity-100 hover:contrast-125" src="/img/galeria4.JPG" alt="Imagen Galeria" />
                    <img className="w-10 lg:w-24 flex-grow object-cover opacity-80 transicion hover:cursor-crosshair hover:w-40 lg:hover:w-80 hover:opacity-100 hover:contrast-125" src="/img/galeria5.JPG" alt="Imagen Galeria" />
                </div>
            </div>
        </>
    )
}

export default Galeria