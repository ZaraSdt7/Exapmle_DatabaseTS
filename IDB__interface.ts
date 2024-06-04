 export default interface IDB {
    connect(): boolean;
    disconnect(): boolean;
    getConnection(): Connection;
}