import { allusers } from "../../Recursos simulados/usersDataBase"
import type { User } from "../types/elements-pages"

export const registerProtocol =(nuevousuario: User)=>{
    const lista = allusers.filter(i=> nuevousuario.email === i.email)
    if(lista.length != 0) {
        return "Email existente"
    }
    const newUser = {
        id:100,
        estado: "habilitado",
        password: nuevousuario.password,
        email: nuevousuario.email,
        phone: nuevousuario.phone,
        nombre: nuevousuario.nombre,
        disponible: true,
        rol: "admin"
    }
    localStorage.setItem("enredat-user",JSON.stringify(newUser))
}