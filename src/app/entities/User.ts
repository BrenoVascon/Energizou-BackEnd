import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  company: string; // Razão Social

  @Column({ type: 'varchar', length: 14, nullable: false })
  CNPJ: string; // Formato: "XX.XXX.XXX/XXXX-XX"

  @Column({ type: 'varchar', length: 8, nullable: false })
  cep: string; // Formato: "XXXXX-XXX"

  @Column({ type: 'varchar', length: 100, nullable: false })
  address: string; // Nome da rua

  @Column({ type: 'varchar', length: 3, nullable: false })
  number: string; // Formato: "XXX"

  @Column({ type: 'varchar', length: 11, nullable: false })
  phone: string; // Formato: "+55 (XX) XXXXX-XXXX"

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string; // Deve ser um email válido
}

export default User;
