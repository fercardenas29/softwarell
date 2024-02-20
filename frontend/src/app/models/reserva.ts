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