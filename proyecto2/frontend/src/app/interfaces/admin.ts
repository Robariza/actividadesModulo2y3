import { User } from "./user";

// extends -> Extensión de la interfaz de User en Admin, ya que es heredado
// User -> interfaz a heredar
export interface Admin extends User {
    categoriaAdmin: boolean;
}
