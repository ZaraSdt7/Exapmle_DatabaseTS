import { Column, DataType, Table } from 'sequelize-typescript'
import BaseSequelizeModel from '../base.sequelize.model'

@Table({ tableName: 'contacts' })
export default class ContactSequelizeModel extends BaseSequelizeModel<ContactSequelizeModel> {

    @Column({ type: DataType.TINYINT, field: 'type', allowNull: false })
    type: number

    @Column({ type: DataType.STRING(64), field: 'value_hash', allowNull: false })
    valueHash: string

    @Column({ type: DataType.STRING(256), field: 'value_fsx', allowNull: false })
    valueFsx: string

    @Column({ field: 'confirmed_at', type: DataType.DATE, allowNull: true })
    confirmedAt?: Date

    @Column({ field: 'expired_at', type: DataType.DATE, allowNull: true })
    expiredAt?: Date
}
