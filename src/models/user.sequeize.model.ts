import { Column, DataType, Table } from 'sequelize-typescript'
import BaseSequelizeModel from '../base.sequelize.model'

@Table({ tableName: 'users' })
export default class UserSequelizeModel extends BaseSequelizeModel<UserSequelizeModel> {

    @Column({ type: DataType.TINYINT, field: 'type', allowNull: false })
    type: number

    @Column({ field: 'blocked_at', type: DataType.DATE, allowNull: true })
    blockedAt?: Date

    @Column({ field: 'blocket_reason', type: DataType.TEXT, allowNull: true })
    blocketReason?: string
}
