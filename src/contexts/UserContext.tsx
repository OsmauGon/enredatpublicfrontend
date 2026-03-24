import {createContext, useState, type ReactNode} from 'react'
import type { User } from '../types/elements-pages';


export type UserContextType = {
    user: User | null;
    setUser: (user: User) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children}: {children: ReactNode}) =>{
    const [user,setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

//Hook personalizado para consumir el contexto
