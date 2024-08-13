export interface User {
    // Por defecto en typscript los campos es requerido 
    nombreCompleto: string;
    correo: string;
    contrasenia: string;
    // ? -> indica que es un campo opcional
    imagen?: string;
}
