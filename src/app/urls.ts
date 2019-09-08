
const urlUsuarios = 'http://localhost:3000/usuarios';
const urlPeliculas = 'http://localhost:3000/peliculas';
const urlReservas = 'http://localhost:3000/reportes';

export const URLs = {
    //usuarios
    urlObtenerUsuarios: `${urlUsuarios}`,
    urlCrearUsuarios: `${urlUsuarios}`,
    urlConsultaUsuarioExistente: `${urlUsuarios}?email=`,
    urlTraerDatosUsuario: `${urlUsuarios}?email=`,
    urlActualizarUsuario: `${urlUsuarios}/`,


    //peliculas
    urlObtenerPeliculas: `${urlPeliculas}`,
    urlCrearPeliculas: `${urlPeliculas}`,
    urlActualizarPelicula: `${urlPeliculas}/`,
    urlEliminarPelicula: `${urlPeliculas}/`,

    //reservas
    urlReservarPeliculas: `${urlReservas}`,
    urlCrearReservaPelicula: `${urlReservas}`

}