

import { Route, Routes } from 'react-router-dom'
import './main-styles.css'
import { Haeder } from './Layout/Haeder'
import { Footer } from './Layout/Footer'
import { PageHome } from './pages/PageHome'
import { PageAco } from './pages/PageAco'
import { PageCases } from './pages/PageCases'
import { PageEvents } from './pages/PageEvents'
import { PageInfo } from './pages/PageInfo'
import { PageLogreg } from './pages/PageLogreg'
import { PageSup } from './pages/PageSup'
import { UserProvider } from './contexts/UserProvider'
import { PageEdit } from './pages/PageEdit'
import { PageNewCase } from './pages/PageNewCase'
import { PageNewEvent } from './pages/PageNewEvent'
import { PageNewInfo } from './pages/PageNewInfo'

 const conjuntouno = [
        {id: 12,lable: "Acompañantes", link: "/ats", compo: <PageAco />},
        {id: 13,lable: "Casos", link: "/casos", compo: <PageCases />},
        {id: 14,lable: "Comunidad", link: "/comunidad", compo: <PageEvents />},
        {id: 15,lable: "Info util", link: "/infoutil", compo: <PageInfo />},
        {id: 16,lable: "Supervision", link: "/supervision", compo: <PageSup />},
        {id: 16,lable: "Supervision", link: "/login", compo: <PageLogreg />},
        {id: 19,lable: "Nuevo Caso", link: "/newcase", compo: <PageNewCase/>},
        {id: 20,lable: "Nuevo Evento", link: "/newevent", compo: <PageNewEvent />},
        {id: 21,lable: "Nueva Informacion", link: "/newinfo", compo: <PageNewInfo />},
        {id: 22,lable: "Editar cuenta", link: "/useredit", compo: <PageEdit />},
    ]
function App() {
    return (
    <>
        <UserProvider>
        <Haeder></Haeder>
        <main>
            <Routes>
                <Route index path="/" element={<PageHome />} />
                {conjuntouno.map(e=> (<Route key={e.id} path={e.link} element={e.compo}/>))}                
                
                
            </Routes>
        </main> 
        <Footer></Footer>
        </UserProvider>
    </>
  )
}

export default App
