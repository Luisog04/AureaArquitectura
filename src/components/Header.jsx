

const Header = () => {
  return (
    <header className="">
      <img className="w-full max-h-96 opacity-80 xl:absolute" src="src/img/aurea2.JPG" alt="Imagen aurea" />

      <div className="md:flex justify-between items-center p-3 font-semibold">
        <h1 className="md:mx-5 py-3 px-10 text-xl lg:text-3xl xl:relative text-center">Áurea Diseño y Arquitectura</h1>

        <nav className="grid md:flex justify-center items-center xl:relative">
          <a className="mx-5 py-3 px-8 opacity-100 text-center text-xl lg:text-3xl" href="#">Sobre Nosotros</a>
          <a className="mx-5 py-3 px-8 opacity-100 text-center text-xl lg:text-3xl" href="#">Proyectos</a>
          <a className="mx-5 py-3 px-8 opacity-100 text-center text-xl lg:text-3xl" href="#">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header