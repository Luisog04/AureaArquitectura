

const Header = ({serviciosref, proyectosref, contactoref, scrollToSection}) => {


  return (
    <header className="">
      <img className="w-full max-h-96 opacity-80 xl:absolute" src="/img/aurea2.JPG" alt="Imagen aurea"  />

      <div className="md:flex justify-between items-center p-3 font-semibold">
        <h1 className="md:mx-5 xl:top-72 py-3 px-10 text-2xl lg:text-3xl xl:relative text-center "
        >Áurea Diseño y Arquitectura</h1>

        <nav className="grid md:flex justify-center xl:top-72 items-center xl:relative">
          <a className="mx-auto lg:mx-5 py-3 px-8 opacity-100 text-center text-2xl lg:text-3xl" onClick={() => scrollToSection(proyectosref)}  href="#">Proyectos</a>
          <a className="mx-auto lg:mx-5 py-3 px-8 opacity-100 text-center text-2xl lg:text-3xl" onClick={() => scrollToSection(serviciosref)} href="#">Servicios</a>
          <a className="mx-auto lg:mx-5 py-3 px-8 opacity-100 text-center text-2xl lg:text-3xl" onClick={() => scrollToSection(contactoref)}  href="#">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header