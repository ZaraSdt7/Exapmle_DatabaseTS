import Sequelize from 'sequelize'
import { BaseColumnsSequelizeMigrationKeys, ForeignColumnSequelizeMigrationKey, IdColumnSequelizeMigrationKey } from '../base.migration';
import type { SequelizeMigrationRunnerUmzugBasePackage } from '../umzug'

const TABLE_NAME = 'account_usernames'

export const up: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().createTable(TABLE_NAME, {
        account_id: ForeignColumnSequelizeMigrationKey('accounts', { allowNull: false },
            {...ForeignColumnSequelizeMigrationKey('accounts', { allowNull: false }), primaryKey: true}),
        username: { type: Sequelize.STRING(64), allowNull: false },
        ...BaseColumnsSequelizeMigrationKeys,
    }, { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }
)}

export const down: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().dropTable(TABLE_NAME)
}
