import IRowOperation from "./IRow_interface";

export abstract class Model implements IRowOperation {
    name: string;
    email: string;

    constructor( name: string, email: string) {
 
        this.name = name;
        this.email = email;
    }

     update(): boolean{
        console.log(`Updating user`);
        return true;
     }
     delete(): boolean{
        console.log(`Deleting user`);
        return true;
     }

    static create(name: string, email: string): Model {
        throw new Error("Method not implemented.");
    }

    static select(name:string , email:string): Model | null {
        throw new Error("Method not implemented.");
    }
}