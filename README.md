![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

# Projeto de API Crud

Este é um projeto de uma API REST feito em Node, desenvolvido como parte do desafio proposto pela Energizou, aonde preciso fornecer rotas Api´s para utilizar na aplicação front-end essas rotas são
● Criar uma nova empresa.
● Listar todas as empresas cadastradas.
● Consultar uma empresa específica por CNPJ.
● Atualizar os dados de uma empresa.
● Excluir uma empresa
. 

## Link de acesso ao projeto
https://github.com/BrenoVascon/Energizou-BackEnd


## Sumário:

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Setup](#setup)
- [Abordagem](#abordagem)
- [License](#license)

## Sobre o Projeto

Este projeto demonstra a criação de uma API RESTful usando o framework Django. O objetivo é fornecer um exemplo simples para configurar e executar o projeto, bem como detalhes sobre a integração contínua com o GitHub Actions.

## Tecnologias

Este projeto faz uso de diversas tecnologias e ferramentas, incluindo:
 -TypeScript: Um superconjunto tipado do JavaScript que fornece recursos adicionais de verificação de tipos e ferramentas de compilação.

 -Node.js: Uma plataforma de tempo de execução de JavaScript que permite executar código JavaScript do lado do servidor.

 -MySQL: Um sistema de gerenciamento de banco de dados relacional amplamente utilizado.

 -TypeORM: Uma biblioteca de mapeamento objeto-relacional (ORM) para TypeScript e JavaScript que simplifica a interação com bancos de dados relacionais.

-Yarn: Um gerenciador de pacotes para JavaScript que ajuda a gerenciar dependências de projetos de forma eficiente.
## Setup

### Iniciando o Projeto Localmente

Para iniciar o projeto localmente, siga as instruções abaixo:

1. **Clone o Repositório**: Faça uma cópia deste repositório em sua máquina local.

2. **Instale as dependencias**:
   >
   > ```bash
   > npm install 
   > ```
   >
   > Ou `yarn`:
   > yarn 
   > ```bash
  

3. **Inicie o Servidor do Node**:

   ```bash
   depois de instalar as dependencias, 
   use o comando npm dev:server.
   se tudo ocorrer certo, no terminal aparecera o seguinte
   "Database OK
   Server started on port 3333"
   ```



4. Agora, você pode acessar o projeto em [http://localhost:3333/](http://localhost:3333/).



## Abordagem

- Teste e Documentação da API com Insomnia
O Insomnia é uma ferramenta popular para testar APIs e documentar solicitações HTTP. Ele oferece uma interface amigável para criar, organizar e executar solicitações de API, permitindo que você teste todas as funcionalidades da sua aplicação de forma eficiente. Aqui está como o utilizamos em nosso projeto:

-**Configuração Inicial**
Instalação: Você pode baixar e instalar o Insomnia a partir do site oficial.

-**Importação das Solicitações**: Importamos coleções de solicitações do Insomnia para testar nossa API. Essas coleções podem ser compartilhadas com a equipe para manter um conjunto consistente de testes.

-**Organização**
No Insomnia, organizamos nossas solicitações em pastas e coleções. Isso nos ajuda a manter uma estrutura lógica e fácil de navegar para nossos testes.

-**Variáveis de Ambiente**
Usamos variáveis de ambiente para armazenar informações sensíveis, como URLs da API e chaves de autenticação. Isso nos permite manter nossas solicitações flexíveis e seguras.

-**Testes Automatizados**
O Insomnia oferece suporte para escrever scripts de teste automatizados. Isso nos ajuda a verificar automaticamente as respostas da API e garantir que tudo esteja funcionando conforme o esperado.

-**Documentação**
Além de testar a API, o Insomnia nos permite documentar nossas solicitações e respostas. Isso é útil para compartilhar informações com outros membros da equipe e até mesmo para criar uma documentação oficial da API.
