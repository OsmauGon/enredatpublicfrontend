import { allusers } from "../../Recursos simulados/usersDataBase"

type loginUser = {
    email: string;
    password: string;
}
export const loginProtocol =(recurso :loginUser)=>{
    //buscar en base de datos simulada
    const user = allusers.filter(i => i.email === recurso.email && i.password === recurso.password);

    if(user.length > 0){
        return user
    }

    //si no hay en base de datos simulada, buscamos en localStorage
    const localUserStr = localStorage.getItem("enredat-user");
    if(localUserStr){
        const localUser = JSON.parse(localUserStr)
        // Validar que coincida con las credenciales
        if (
        localUser.email === recurso.email &&
        localUser.password === recurso.password
        ) {
        return [localUser]; // lo devolvemos como array para mantener consistencia
        }
    }
    return []
}









