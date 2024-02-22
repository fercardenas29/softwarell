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

export class Contacto{
    constructor(
        public _id:string,
        public nombre:string,
        public telefono:string,
        public correo:string,
        public mensaje:string,
        
        ){}
   
}

export class Hospedaje{
    constructor(
        public _id:string,
        public nombre:string,
        public precio:Number,
        public cantidad:Number,
        public detalle:string,
        public disponible:Boolean,
    ){}
   
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