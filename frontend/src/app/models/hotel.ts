export class Cliente{
    constructor(
        public _id:string,
        public nombre:string,
        public apellido:string,
        public correo:string,
        public cedula:string,
        public telefono:string,
    ){}   
}

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

export class Reserva{
    constructor(
        public _id:string,
        public id_hosp:string,
        public id_cliente:string,
        public nombre_hosp:string,
        public fechaInput: Date,
        public fechaOutput: Date,
        ){}   
}