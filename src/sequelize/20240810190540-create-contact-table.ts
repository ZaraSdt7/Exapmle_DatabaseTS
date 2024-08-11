import Sequelize from 'sequelize'
import { BaseColumnsSequelizeMigrationKeys, IdColumnSequelizeMigrationKey } from '../base.migration'
import type { SequelizeMigrationRunnerUmzugBasePackage } from '../umzug'

const TABLE_NAME = 'contacts'

export const up: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().createTable(TABLE_NAME, {
        ...IdColumnSequelizeMigrationKey,
        type: { type: Sequelize.TINYINT, allowNull: false },
        value_hash: { type: Sequelize.STRING(64), allowNull: false },
        value_fsx: { type: Sequelize.STRING(256), allowNull: false },
        confirmed_at: { type: Sequelize.DATE, allowNull: true },
        expired_at: { type: Sequelize.DATE, allowNull: true },
        ...BaseColumnsSequelizeMigrationKeys,
    }, { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci'},
)}

export const down: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().dropTable(TABLE_NAME)
}
