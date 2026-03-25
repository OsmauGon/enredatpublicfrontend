

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

function App() {
  

  return (
    <>
        <Haeder></Haeder>
        <main>
            <Routes>
                <Route index path="/" element={<PageHome />} />
                <Route path="/ats" element={<PageAco />} />
                <Route path="/casos" element={<PageCases/>} />
                <Route path="/comunidad" element={<PageEvents />} />
                <Route path="/infoutil" element={<PageInfo />} />
                <Route path="/login" element={<PageLogreg />} />
                <Route path="/supervision" element={<PageSup />} />
                
                {/*}
                <Route path="/supervision" element={<PageSupervision />} />
                <Route path="/form" element={<Login />} />               
                */}
            </Routes>
        </main> 
        <Footer></Footer>
    </>
  )
}

export default App
