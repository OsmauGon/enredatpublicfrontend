/*En este archivo declaratemos el tipado de los elementos principales del proyecto: Usarios, Casos, Eventos e Infoutil */

export type User = {
    id: number;
    estado: "habilitado" | "en espera" | "rechazado"
    nombre: string;
    email: string;
    phone: string;
    rangoEtareo: string[]
    titulo?: "Acompañante terapéutico" | "Licenciadx" | "Tecnicx" | "Tecnicx Superior";
    disponible: boolean;
    imagenPerfil: string;
    imagenTitulo: string;
    rol: "admin" | "profesional" | "usuario"
}

export type Case = {
    id: number;
    idDueño: number;
    estado: "habilitado" | "en espera" | "rechazado"
}