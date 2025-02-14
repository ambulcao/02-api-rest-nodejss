Dentro da engenharia de software (atores, casos de uso)

Requisitos Funcionais

Requisitos Funcionais

- [  ] O usuário deve poder criar uma nova transação com data, valor, descrição e categoria;
- [  ] O usuário deve poder obter um resumo da sua conta (saldo atual, total de entradas e saídas);
- [  ] O usuário deve poder listar todas transações que já ocorreram com filtros por período;
- [  ] O usuário deve poder visualizar uma transação única com todos os detalhes;
- [  ] O usuário deve poder editar uma transação existente;
- [  ] O usuário deve poder excluir uma transação;
- [  ] O usuário deve poder categorizar suas transações;
- [  ] O usuário deve poder gerar relatórios de gastos por categoria;

Regras de Negócios

(condicionais)

Regras de Negócio

- [  ] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá;
- [  ] Deve ser possível identificarmos o usuário entre as requisições através de token JWT;
- [  ] O usuário só pode visualizar transações o qual ele criou;
- [  ] Não deve ser possível excluir uma transação com mais de 30 dias;
- [  ] O valor da transação deve ser sempre positivo;
- [  ] A data da transação não pode ser futura;
- [  ] Cada transação deve obrigatoriamente pertencer a uma categoria;
- [  ] O sistema deve manter um histórico de alterações das transações;

Requisitos Não-Funcionais

Requisitos Não-Funcionais

- [  ] Segurança: As transações devem ser armazenadas de forma criptografada;
- [  ] Performance: O sistema deve responder em menos de 1 segundo;
- [  ] Disponibilidade: O sistema deve estar disponível 99.9% do tempo;
- [  ] Escalabilidade: O sistema deve suportar até 100.000 usuários simultâneos;
- [  ] Usabilidade: A interface deve ser responsiva e acessível;
- [  ] Backup: Os dados devem ser backupeados diariamente;
- [  ] Auditoria: Todas as operações devem ser registradas em log;
- [  ] Conformidade: O sistema deve estar em conformidade com a LGPD;
- [  ] Conformidade: O sistema deve estar em conformidade com a LGPD;