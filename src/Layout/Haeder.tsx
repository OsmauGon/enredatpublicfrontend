
import { Link } from 'react-router-dom'


const cerrarNav = () =>{
    console.log("cerrar")
    const nav = document.getElementById("navbarNav") as HTMLElement
    
    setTimeout(()=>{nav.classList.remove("show")}, 100)
}
export const Haeder = () => {
  return (
    <header>
        
    <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
            <Link to={'/'}><img src="/img/headerLogo.png" alt="" className="navbar-brand" /></Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    
                    <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/ats">Acompañantes terapéuticos</Link> </li>
                    <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/casos">Casos</Link></li>
                    <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/comunidad">Comunidad</Link></li>
                    <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/infoutil">InfoUtil</Link> </li>
                    <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/supervision">Supervision</Link> </li>
                    <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/login">Ingrese</Link> </li>
                    {/* <li className="nav-item"><Link className='nav-link' to="/regitro">Registro</Link> </li> */}
                    {/* <li className="nav-item"><Link className='nav-link' to="/contact">Contact</Link></li> */}
                </ul>
            </div>
        </div>
    </nav>
    </header>
  )
}
