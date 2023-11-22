import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1699338159409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
          }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}