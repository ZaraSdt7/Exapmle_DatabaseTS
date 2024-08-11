import Sequelize from 'sequelize'
import { BaseColumnsSequelizeMigrationKeys, IdColumnSequelizeMigrationKey } from '../base.migration'
import type { SequelizeMigrationRunnerUmzugBasePackage } from '../umzug'
import sequelize from 'sequelize'

const TABLE_NAME = 'accounts'

export const up: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().createTable(TABLE_NAME, {
        ...IdColumnSequelizeMigrationKey,
        type: { type: Sequelize.TINYINT, allowNull: false },
        blocked_at: {type:sequelize.DATE, allowNull:true },
        blocket_reason: {type:sequelize.TEXT, allowNull:true },
        ...BaseColumnsSequelizeMigrationKeys,
    }, { charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' })
}

export const down: SequelizeMigrationRunnerUmzugBasePackage = async ({ context }) =>
{
    await context.getQueryInterface().dropTable(TABLE_NAME)
}
