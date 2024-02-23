export class Habitacion {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public cantidad: number,
        public disponible: boolean,
        public imagen: string
    ) { }
}