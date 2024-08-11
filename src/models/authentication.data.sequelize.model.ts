import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript'
import BaseSequelizeModel from '../base.sequelize.model'
import AccountSequelizeModel from './account.sequelize.model'

@Table({ tableName: 'user_authentication_data' })
export default class AuthenticationDataSequelizeModel extends BaseSequelizeModel<AuthenticationDataSequelizeModel>
{
    @ForeignKey(() => AccountSequelizeModel)
    @Column({ type: DataType.BIGINT({ unsigned: true }), field: 'account_id', allowNull: false })
    accountId: number

    @Column({ type: DataType.TINYINT, field: 'key', allowNull: false })
    key: number

    @Column({ type: DataType.STRING, field: 'value', allowNull: false })
    value: string

    @Column({ field: 'blocked_reason', type: DataType.TEXT, allowNull: true })
    blockedReason?: string

    @Column({ field: 'blocked_at', type: DataType.DATE, allowNull: true })
    blockedAt?: Date

    @Column({ field: 'expired_at', type: DataType.DATE, allowNull: true })
    expiredAt?: Date
}