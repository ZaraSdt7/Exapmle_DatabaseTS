interface IRow {
    id: number;
    key: string
  }

interface ITable {
    name: string;
    select(): IRow[];
    create(): IRow;
    update(id: number):boolean;
    delete(id: number): boolean;
  }

