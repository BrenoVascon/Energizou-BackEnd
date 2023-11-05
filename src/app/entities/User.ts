import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, Matches, IsNotEmpty } from 'class-validator';
import { cnpj } from 'cpf-cnpj-validator';
import validator from 'validator';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  company: string; 
 
  @Column({ type: 'varchar', length: 18, nullable: false })
  CNPJ: string;
  
  formatCNPJ(): string {
    this.CNPJ = this.CNPJ.replace(/\D/g, '');
    return this.CNPJ;
  }
  
  validateCNPJ(): boolean {
    const formattedCNPJ = this.formatCNPJ();
    if (cnpj.isValid(formattedCNPJ)) {
      this.CNPJ = formattedCNPJ; // Atualize o valor do CNPJ para a versão formatada
      return true;
    }
    return false;
  }

  @Column({ type: 'varchar', length: 9, nullable: false })
  @IsString()
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'CEP deve estar no formato "XXXXX-XXX"',
  })
  @IsNotEmpty()
  cep: string;


  @Column({ type: 'varchar', length: 100, nullable: false })
  address: string; 

  @Column({ type: 'varchar', length: 3, nullable: false })
  number: string;

  @Column({ type: 'varchar', length: 18, nullable: false })
  @IsString()
  @Matches(/^\+55 \(\d{2}\) \d{5}-\d{4}$/, {
    message: 'Telefone deve estar no formato "+55 (XX) XXXXX-XXXX"',
  })
  phone: string;
  

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string; 
  validadeEmail(): boolean {
   if(validator.isEmail(this.email)) {
    return true
   } else {
    return false
   }
  }
}

export default User;
