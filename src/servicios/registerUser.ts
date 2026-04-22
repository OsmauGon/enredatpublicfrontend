import { allusers } from "../../public/Recursos simulados/usersDataBase";
import type { User } from "../types/elements-pages";

type registerUser = {
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
}

export const registerProtocol =(recurso: registerUser)=>{
    const user: User[] = allusers.filter(i => i.email === recurso.email && i.password === recurso.password);

    if(user.length > 0){
        return false
    }

    //si no hay en base de datos simulada, buscamos en localStorage
    const localUserStr = localStorage.getItem("enredat-user");
    if(localUserStr){
        const localUser = JSON.parse(localUserStr)
        // Validar que coincida con las credenciales
        if (
        localUser.email === recurso.email  
        ) {
        return false; // lo devolvemos como array para mantener consistencia
        }
    }






    const newUser: User = {
        id:100,
        estado: "habilitado",
        password: recurso.password ? recurso.password : "",
        email: recurso.email ? recurso.email : "",
        phone: recurso.phone ? recurso.phone : "",
        nombre: recurso.name  ? recurso.name  : "",
        disponible: true,
        rol: "admin"
    }
    localStorage.setItem("enredat-user",JSON.stringify(newUser))
    return newUser
}