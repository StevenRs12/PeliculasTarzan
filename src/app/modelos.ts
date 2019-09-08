

export type Usuarios = Usuario[];
export type Peliculas = Pelicula[];
export type Reportes = Reporte[];

export interface Usuario {
    id: number;
    email: string;
    nombre: string;
    apellido: string;
    dirreccion: string;
    password: string;
    esAdmin: boolean;
}

export interface Pelicula {
    id: number;
    titulo: string;
    descripcion: string;
    actores: string[];
    director: string;
    costo: number;
    unidadesDisponibles: number;
}

export interface Reporte {
    pelicula: string;
    correoUsuario: string;
    Fecha: Date
}
