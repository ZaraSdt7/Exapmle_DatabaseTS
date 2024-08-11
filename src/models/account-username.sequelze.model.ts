import { Column, DataType, Table } from 'sequelize-typescript'
import BaseSequelizeModel from '../base.sequelize.model'

@Table({ tableName: 'account_usernames' })
export default class AccountUsernameSequelizeModel extends BaseSequelizeModel<AccountUsernameSequelizeModel> {

    @Column({ type: DataType.BIGINT({ unsigned: true }), field: 'account_id', allowNull: false })
    accountId: number

    @Column({ type: DataType.STRING(64), field: 'username', allowNull: false })
    username: string
}
