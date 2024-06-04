
export abstract class Model<TFields = Record<string, unknown>> implements IRowOperation
{
    abstract readonly tableName: string

    static select<TFields = Record<string, unknown>>(): Model<TFields>[]
    {
        throw new Error("Method not implemented.")
        return []
    }

    static create<T = Record<string, string | number | boolean | object>, TFields = Record<string, unknown>>(data: T): Model<TFields>
    {
        throw new Error("Method not implemented.")
    }

    update(): boolean
    {
        console.log('Updating model')
        return true
    }

    delete(): boolean
    {
        console.log('Deleting model')
        return true
    }
}



/////////////////////////////////////////////////////



export interface IUserModel
{
    email: string
    password: string
}

export class UserModel extends Model<IUserModel>
{
    tableName = 'users'
}

//////////////////////////////////////////////////////////

export interface IRowOperation
{
  update(): boolean
  delete(): boolean
}
/////////////////////////////////////////////

async function main()
{
    UserModel.select<IUserModel>()
    const model = UserModel.create<{ email: string, password: string }, IUserModel>({
        email: '',
        password: '',
    })

    model.tableName

    ////////////////////////////////////////
}


