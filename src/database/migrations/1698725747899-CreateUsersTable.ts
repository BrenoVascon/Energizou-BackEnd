import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1698725747899 implements MigrationInterface {

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
                name: 'CNPJ',
                type: 'varchar',
                length: '20', // Aumentei o comprimento para acomodar "XX.XXX.XXX/XXXX-XX"
                isNullable: false,
              },
              {
                name: 'cep',
                type: 'varchar',
                length: '10', // Acomoda "XXXXX-XXX"
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
                length: '3', // Acomoda "XXX"
                isNullable: false,
              },
              {
                name: 'phone',
                type: 'varchar',
                length: '20', // Acomoda "+55 (XX) XXXXX-XXXX"
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


