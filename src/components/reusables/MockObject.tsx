import React from 'react'
import '../../styles/mockobject.css'
import type { User } from '../../types/elements-pages';
import CarnetUsuario from './CarnetUsuario';



interface GridContainerProps {
  item: User;
  setMockobject: (val: User | null)=>void
}

export const MockObject: React.FC<GridContainerProps> = ({ item, setMockobject }) => {
  return (
    <div className='mockobject'>
        <button className='mockobject-button' onClick={()=> setMockobject(null)}>⬅️ Volver</button>
        {/* <div className="mockobject-content">
          <div className="mockobject-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam perferendis cumque nemo doloribus perspiciatis odio, non similique quibusdam ipsam! Quo odit sequi quibusdam, nihil nam vel aliquid dolore harum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod itaque officiis nobis nulla odio laborum dolor voluptatem, saepe voluptate a asperiores qui id rerum nemo, mollitia atque amet deserunt.
          </div>
          <div className="mockobject-images">
            <img src="https://www.hawtcelebs.com/wp-content/uploads/2017/11/lali-esposito-at-2017-mtv-europe-music-awards-in-london-11-12-2017-4.jpg" alt="perfil" />
            <img src="https://tse1.mm.bing.net/th/id/OIP.jA_QxQQpWqKGFwl2YVvj1gHaE7?pid=Api&P=0&h=180" alt="titulo" />
          </div>
        </div> */}
        <CarnetUsuario nombre={item.nombre}
         titulo={item.titulo}
         especialidad={item.rangoEtareo}
         telefono={item.phone}
         contacto={item.email}
         //fotoTitulo={item.imagenTitulo}
         fotoUsuario={item.imagenPerfil}
        />
        <img src={item.imagenTitulo} alt="titulo" />
          
    </div>
  )
}