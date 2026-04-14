import { allusers } from "../../Recursos simulados/usersDataBase"

type loginUser = {email: string;password: string;}
export const loginProtocol =(recurso :loginUser)=>{
    //search in simulated database * buscar en base de datos simulada
    const user = allusers.filter(i => i.email === recurso.email && i.password === recurso.password);
    if(user.length > 0){ return user }
    //If it's not in the simulated database, we look in localStorage. * si no hay en base de datos simulada, buscamos en localStorage
    const localUserStr = localStorage.getItem("enredat-user");
    if(localUserStr){
        const localUser = JSON.parse(localUserStr)
        // Verify that it matches the credentials * Validar que coincida con las credenciales
        if (
        localUser.email === recurso.email &&
        localUser.password === recurso.password
        ) {
        return [localUser]; // We return it as an array to maintain consistency - lo devolvemos como array para mantener consistencia
        }
    }
    return []
}









