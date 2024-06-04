// class User_Model implements ITable,IRow{
//     name: string;
//   rows: IRow[];

import { Model } from "./abstarct_model";
import IRowOperation from "./IRow_interface";
import IRowInstance from "./IRow_interface";


//   constructor(name: string) {
//     this.name = name;
//     this.rows = [];
//   }
//     id: number;
//     key: string;

//   select(): IRow[] {
//     return this.rows;
//   }

//   create(row: IRow): IRow {
//     this.rows.push(row);
//     return row;
//   } 
// }

// class User_Model implements ITable {
//     name = users;
//     select(): IRow[] {
//         throw new Error("Method not implemented.");
//     }
//     create(): IRow {
//         throw new Error("Method not implemented.");
//     }
  
//     static select(): IRow[] {
//       return [];
//     }
  
//     static create(): IRow {
//       return { id: 0, key: '' };
//     }
  
//     update(id: number): boolean {

//       return false;
//     }
  
//     delete(id: number): boolean {
//       return false;
//     }
//   }
  
  ////////////////////////////////////
//   class UserModel implements IRowOperation {
//     // id: number;

//     name: string;
//     email: string;

//     constructor( name: string, email: string) {

//         this.name = name;
//         this.email = email;
//     }

//     update(): boolean {
//         console.log(`Updating user`);
//         return true;
//     }

//     delete(): boolean {
//         console.log(`Deleting user`);
//         return true;

//     }

//     static create( name: string, email: string): UserModel {
//         console.log(`Creating user`);
//         return new UserModel(name, email);
//     }

//     static select(name:string , email:string): UserModel | null {
//         console.log(`Selecting user`);
   
//         return new UserModel( name,email);
//     }
// }
/////////////////////////////

class UserModel extends Model {
    constructor( name: string, email: string) {
        super(name, email);
    }

    update(): boolean {
        console.log(`Updating user`);
        return true;
    }

    delete(): boolean {
        console.log(`Deleting user`);
        return true;
    }

    static create( name: string, email: string): UserModel {
        console.log(`Creating user`);
        return new UserModel( name, email);
    }

    static select(name:string,email:string): UserModel | null {
        console.log(`Selecting user`);
      
        return new UserModel(name,email);
    }
}