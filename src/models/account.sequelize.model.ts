// import { Column, DataType, Table } from 'sequelize-typescript'
// import BaseSequelizeModel from '../base.sequelize.model'

// @Table({ tableName: 'user_accounts' })
// export default class AccountSequelizeModel extends BaseSequelizeModel<AccountSequelizeModel>
// {
//     @Column({ field: 'type', type: DataType.TINYINT, allowNull: false })
//     type: number

//     // @Column({ field: 'nickname', type: DataType.STRING(64), allowNull: true })
//     // nickname?: string

//     // @Column({ field: 'username_fsx', type: DataType.STRING(256), allowNull: true })
//     // username_fsx?: string

//     // @Column({ field: 'email_fsx', type: DataType.STRING(256), allowNull: true })
//     // email_fsx?: string

//     // @Column({ field: 'phone_number_fsx', type: DataType.STRING(256), allowNull: true })
//     // phoneNumber_fsx?: string

//     @Column({ field: 'blocked_reason', type: DataType.TEXT, allowNull: true })
//     blockedReason?: string

//     @Column({ field: 'blocked_at', type: DataType.DATE, allowNull: true })
//     blockedAt?: Date
// }

import { Column, DataType, Table } from 'sequelize-typescript'
import BaseSequelizeModel from '../base.sequelize.model'

@Table({ tableName: 'accounts' })
export default class AccountSequelizeModel extends BaseSequelizeModel<AccountSequelizeModel> {

    @Column({ type: DataType.BIGINT({ unsigned: true }), field: 'user_id', allowNull: false })
    userId: number

    @Column({ type: DataType.TINYINT, field: 'type', allowNull: false })
    type?: number

    @Column({ field: 'blocked_reason', type: DataType.TEXT, allowNull: true })
    blockedReason?: string

    @Column({ field: 'blocked_at', type: DataType.DATE, allowNull: true })
    blockedAt?: Date
}
