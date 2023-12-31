interface IUser {
  id?: number;
  name: string;
  password: string;
  company: string; // Razão Social da empresa
  cnpj: string; // Formato: "XX.XXX.XXX/XXXX-XX"
  cep: string; // Formato: "XXXXX-XXX"
  address: string; // Nome da rua
  number: string; // Formato: "XXX"
  phone: string; // Formato: "+55 (XX) XXXXX-XXXX"
  email: string; // Deve ser um email válido
}

export default IUser;
