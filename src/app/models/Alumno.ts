export class Alumno{
    id:number;
    nombre:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    sexo: number;

    constructor(id:number,nombre:string,apellidoPaterno:string,apellidoMaterno:string,sexo:number){
        this.id=id;
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;
        this.sexo=sexo;
    }
}
