import Header from "./components/Header"
import Nosotros from "./components/Nosotros"
import Galeria from "./components/Galeria"
import Contacto from "./components/Contacto"
import Servicios from "./components/Servicios"
import Footer from "./components/Footer"
import { useRef } from "react"

function App() {

 
  const proyectosref = useRef(null)
  const serviciosref = useRef(null)
  const contactoref = useRef(null)

  function scrollToSection(referencia) {
    window.scrollTo({
      top: referencia.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    < >
      <Header
        proyectosref={proyectosref}
        serviciosref={serviciosref}
        contactoref={contactoref}
        scrollToSection={scrollToSection}
      />
      <Nosotros/>
      <Galeria 
        proyectosref={proyectosref}
        />
      <Servicios
        serviciosref={serviciosref}
        />
      <Contacto
        contactoref={contactoref}
      />
      <Footer />
    </>
  )
}

export default App
