
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { useContext, useState } from 'react';



const cerrarNav = () =>{
    console.log("cerrar")
    const nav = document.getElementById("navbarNav") as HTMLElement
    
    setTimeout(()=>{nav.classList.remove("show")}, 100)
}
export const Haeder = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState<boolean>(true)
    const context = useContext(UserContext);
    if (!context) {
    throw new Error("Header debe usarse dentro de un UserProvider");
    }
    const {user, setUser} = context

    const conjuntouno = [
        {id: 12,lable: "Acompañantes", link: "/ats"},
        {id: 13,lable: "Casos", link: "/casos"},
        {id: 14,lable: "Comunidad", link: "/comunidad"},
        {id: 15,lable: "Info util", link: "/infoutil"},
        {id: 16,lable: "Supervision", link: "/supervision"}
    ]
    const conjuntodos = [
        {id: 19,lable: "Nuevo Caso", link: "/newcase"},
        {id: 20,lable: "Nuevo Evento", link: "/newevent"},
        {id: 21,lable: "Nueva Informacion", link: "/newinfo"},
        {id: 22,lable: "Editar cuenta", link: "/useredit"},
    ]
    const logout = ()=>{
        localStorage.removeItem("enredt-user")
        setUser(null)
        navigate('/')
    }
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
                    {page && (conjuntouno.map(e=> (<li key={e.id} className="nav-item" onClick={cerrarNav}><Link className='nav-link' to={e.link}>{e.lable}</Link> </li>)))}
                    {!user && <li className="nav-item" onClick={cerrarNav}><Link className='nav-link' to="/login">Ingrese</Link> </li>}
                    {user && <li className='nav-item' onClick={()=>{setPage(!page)}}><Link className='nav-link' to='#'>{page ? "Mas" : "Atras"}</Link></li>}
                    {user && !page && (conjuntodos.map(e=> (<li key={e.id} className="nav-item" onClick={cerrarNav}><Link className='nav-link' to={e.link}>{e.lable}</Link> </li>)))}
                    {user && <li className='nav-item' onClick={logout}><Link className='nav-link' to='#'>Salir</Link></li>}
                </ul>
            </div>
        </div>
    </nav>
    </header>
  )
}
