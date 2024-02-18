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