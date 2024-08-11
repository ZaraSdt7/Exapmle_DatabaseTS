import { Op } from 'sequelize'
import { Column, CreatedAt, DataType, DeletedAt, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({
    paranoid: true,
    defaultScope: {
        where: { deletedAt: { [ Op.eq ]: null } },
        order: [ [ 'updated_at', 'DESC' ] ],
    },
})
export default class BaseSequelizeModel<
    TModelAttributes extends {} = any,
    TCreationAttributes extends {} = TModelAttributes,
> extends Model<TModelAttributes, TCreationAttributes>
{
    @Column({ field: 'guid', type: DataType.UUIDV4, defaultValue: DataType.UUIDV4, unique: true })
    guid: string

    @Column({ field: 'id', type: DataType.BIGINT({ unsigned: true }), primaryKey: true, autoIncrement: true })
    id: number

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt: Date

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt?: Date
}