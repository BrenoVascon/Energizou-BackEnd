import { MigrationInterface, QueryRunner,  Table } from "typeorm"

export class CreateUsersTable1698909248807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
                length: '100',
                isNullable: false,
              },
              {
                name: 'password',
                type: 'varchar',
                length: '100',
                isNullable: false,
              },
              {
                name: 'company',
                type: 'varchar',
                length: '100',
                isNullable: false,
              },
              {
                name: 'cnpj',
                type: 'varchar',
                length: '20', 
                isNullable: false,
              },
              {
                name: 'cep',
                type: 'varchar',
                length: '10', 
                isNullable: false,
              },
              {
                name: 'address',
                type: 'varchar',
                length: '100',
                isNullable: false,
              },
              {
                name: 'number',
                type: 'varchar',
                length: '3', 
                isNullable: false,
              },
              {
                name: 'phone',
                type: 'varchar',
                length: '20', 
                isNullable: false,
              },
              {
                name: 'email',
                type: 'varchar',
                length: '100',
                isNullable: false,
              },
            ],
          })
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
