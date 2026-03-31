import React from 'react'
import '../../styles/mockobject.css'
import type { Case, Event, User } from '../../types/elements-pages';
import CarnetUsuario from './CarnetUsuario';
import { CaseCarnet, EventCarnet } from './Carnets';



type GridContainerProps = {
  item: User | Case | Event;
  setMockobject: (val: null)=>void
}

export const MockObject: React.FC<GridContainerProps> = ({ item, setMockobject }) => {
  return (
    <div className='mockobject'>
        <button className='mockobject-button' onClick={()=> setMockobject(null)}>⬅️ Volver</button>
        
        {
          "nombre" in item && ( //objeto User
                                <CarnetUsuario nombre={item.nombre}
                                titulo={item.titulo}
                                especialidad={item.rangoEtareo}
                                telefono={item.phone}
                                contacto={item.email}
                                //fotoTitulo={item.mainImage}
                                fotoUsuario={item.profileImage}
                                />
                              )
        }
        {"dx" in item && ( //objeto Case
          <CaseCarnet props={item}/>
        )
        }
        {"description" in item && ( //objeto Event
          <EventCarnet props={item}/>
        )

        }
        {"mainImage" in item && (<img src={item.mainImage} alt="titulo" />)}
          
    </div>
  )
}