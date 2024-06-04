import IDB from "./IDB__interface";

class Connection {}
  
  class PostgresDB implements IDB {
    private connection: Connection | null = null;
  
    connect(): boolean {
      this.connection = new Connection();
      return true; 
    }
  
    disconnect(): boolean {
      if (this.connection) {
        this.connection = null;
      }
      return true;
    }
  
    getConnection(): Connection {
      if (!this.connection) {
        throw new Error("No connection available");
      }
      return this.connection;
    }


  }
  