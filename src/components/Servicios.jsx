
const Servicios = () => {
  return (
    <div>
        <h4 className="text-center text-3xl my-10 text-emerald-800 font-extrabold">Nuestros Servicios</h4>
        <div className="md:flex">
            <div className=" bg-gray-200 rounded-lg md:w-1/2 shadow-lg text-center mx-5 px-3">
                <h5 className="text-2xl font-bold ">Diseño de Anteproyectos y Planos</h5>
                <p className="text-xl font-medium">Ofrecemos nuestra amplia experiencia en Diseño Arquitectónico, Estructural y Topográfico. Si desea contratar esta etapa para luego construir, con nosotros lo puede hacer.</p>
                <img img className="w-2/3 py-3 mx-auto my-5" src="src/img/diseño.JPG" alt="imagen diseño" />
            </div>
            <div className=" bg-gray-200 rounded-lg md:w-1/2 shadow-lg text-center mx-5 px-3">
                <h5 className="text-2xl font-bold ">Propuestas de Obra</h5>
                <p className="text-xl font-medium">Necesita un presupuesto para su proyecto, con gusto le podemos cotizar el servicio, nuestra constante retroalimentación de los proyectos en ejecución nos permite brindarle un cálculo preciso.</p>
                <img img className="w-2/3 py-3 mx-auto my-5" src="src/img/presupuesto.JPG" alt="imagen presupuesto" />
            </div>
            <div className=" bg-gray-200 rounded-lg md:w-1/2 shadow-lg text-center mx-5 px-3 items-center">
                <h5 className="text-2xl font-bold ">Llave en Mano</h5>
                <p className="text-xl font-medium">Ofrecemos las siguientes modalidades: Todo Incluido, Adminstració de Obra, Solo Mano de Obra, Dirección Técnica. Nos encargamos de que su proyecto sea realizado con los mejores estándares de calidad del mercado.
                </p>
                <img className="w-2/3 py-3 mx-auto my-5" src="src/img/llave.png" alt="imagen llave" />
            </div>
        </div>
    </div>
  )
}

export default Servicios