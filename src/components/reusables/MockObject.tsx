import React from 'react'
import '../../styles/mockobject.css'
import type { User } from '../../types/elements-pages';



interface GridContainerProps {
  item: User;
  setMockobject: (val: User | null)=>void
}

export const MockObject: React.FC<GridContainerProps> = ({ item, setMockobject }) => {
  return (
    <div className='mockobject'>
        <button className='mockobject-button' onClick={()=> setMockobject(null)}>⬅️ Volver</button>
        <div className="mockobject-content">{JSON.stringify(item)}</div>
    </div>
  )
}