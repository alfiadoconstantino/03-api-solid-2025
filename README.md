# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possiel obter o perfil de um usuario logado;
- [x] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [x] Deve ser possivel o usuario obter seu historicos de check-ins;
- [x] Deve ser possivel o usuario buscar academias proximas (ate 10km);
- [x] Deve ser possivel o usuario buscar academias pelo nome;
- [x] Deve ser possivel o usuario realizar check-in em uma academia;
- [x] Deve ser possivel validar o chec-in de um usuario;
- [x] Deve ser possivel cadastrar uma academia.

## RNS (Regras de negocio)

  - [x] O usuario nao deve poder se cadastrar com um e-mail duplicado;
  - [x] O Usuario nao pode fazer 2 check-ins no mesmo dia;
  - [x] O usuario nao pode fazer check-in se nao estiver perto (100m) da academia
  - [x] O chek-in so pode ser validado ate 20 minutos apos ser criado
  - [x] O check-in so pode ser validado por administradores
  - [x] A cademia so pode ser cadastrada por administradores.

## RNFs (Requisitos nao-funcionais)

- [x] A senha do usuario precisa estar criptografada;
- [x] Os dados da aplicacao precisam estar persistidos em um banco de dados postgresSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por pagina;
- [x] O usuario deve ser indentificado por um JWT;