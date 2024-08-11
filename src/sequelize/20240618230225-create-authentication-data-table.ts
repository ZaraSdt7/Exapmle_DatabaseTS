import Sequelize from 'sequelize'
import { BaseColumnsSequelizeMigrationKeys, ForeignColumnSequelizeMigrationKey, IdColumnSequelizeMigrationKey } from '../base.migration'
import type { SequelizeMigrationRunnerUmzugBasePackage } from '../umzug'

const TABLE_NAME = 'user_account_authentication_data'

export const up: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().createTable(TABLE_NAME, {
        ...IdColumnSequelizeMigrationKey,
        account_id: ForeignColumnSequelizeMigrationKey('user_accounts'),
        key: { type: Sequelize.TINYINT, allowNull: false },
        value: { type: Sequelize.STRING(2048), allowNull: false },
        blocked_reason: { type: Sequelize.TEXT, allowNull: true },
        blocked_at: { type: Sequelize.DATE, allowNull: true },
        expired_at: { type: Sequelize.DATE, allowNull: true },
        ...BaseColumnsSequelizeMigrationKeys,
    }, { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' })
}

export const down: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().dropTable(TABLE_NAME)
}
