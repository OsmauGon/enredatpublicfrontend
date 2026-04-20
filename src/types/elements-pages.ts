/*En este archivo declaratemos el tipado de los elementos principales del proyecto: Usarios, Casos, Eventos e Infoutil */

export type User = {
    id: number;
    estado: "habilitado" | "en espera" | "rechazado"
    nombre: string;
    password: string;
    email: string;
    phone: string;
    rol: "admin" | "profesional" | "usuario"
    disponible: boolean;
    rangoEtareo?: string[]
    titulo?: "Acompañante terapéutico" | "Licenciadx" | "Tecnicx" | "Tecnicx Superior";
    profileImage?: string;
    mainImage?: string;
    esSupervisor?: boolean;
}

export type Case = {
    id: number;
    idDueño: number;
    estado: "habilitado" | "en espera" | "rechazado"
    disponible: boolean;

    dx: string;
    tipoPaciente: "Niñx" | "Adolecente" | "Adulto" | "Adulto mayor";
    edad: number;
    contacto: string[];
    solicitud: string;
    covertura: string;
    franjahoraria: string;
}

export type Event = {
    id: number;
    idDueño: number;
    estado: "habilitado" | "en espera" | "rechazado"
    disponible: boolean;

    titulo: string;
    mainImage: string;
    startDate: string;
    endDate: string;
    description: string;
}

export type Info = {
    id: number;
    idDueño: number;
    estado: "habilitado" | "en espera" | "rechazado"
    disponible?: boolean;

    titulo: string;
    subtitulos: string[];
    textos: string[];
    resumen?: string;//no estoy seguro
    images?: string[];//probablemente se elimine
    infoType: "lista" | "no-lista";//probablemente se elimine
    mainImage?: string;//url de la imagen que puede der visible para el usuario
    mainFile?: string;//url del documento que vera el usuario para leer
    downloadDocument?: string;//url del documento que el usuario podria descargar
}