  export default interface IRowOperation {
    // id: number;
    update(): boolean;
    delete(): boolean;
  }