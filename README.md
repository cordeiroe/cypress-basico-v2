Este é mais um curso da [**Escola Talking About Testing**](https://udemy.com/user/walmyr).


# Cypress Básico - Testes CAC TAT

Projeto com uma suite de testes em cypress para testar a página disponibilizada no curso de Cypress básico ministrado pelo Walmy da Talking about Testing 
## Pré Requisitos

É necessário que tenha instalado no seu PC o NodeJS e NPM 

> Eu optei por usar as versões mais recentes no momento em que realizei o curso, que são as versões 16.15 do Node e 8.5.5 do NPM

## Instalação

Para realizar a instalação pode ser usado o comando npm install que irá realizar a instalação das dev dependencies, ou caso queira realizar a instalação manual, a  versão utilizada do Cypress estará no arquivo package.json. 

## Rodando os testes

Foram feitas quatro configurações para rodar a suite de testes, são elas:

1 - npm run cy:open -> Irá abrir o modo interativo do Cypress, ou seja, os testes serão feitos de maneira visual para você
2 - npm run test -> O teste será feito de maneira headless, ou seja, os testes não irão ser feitos de maneira visual, apenas entregando o resultado no prompt.
3 - npm run cy:openMobile -> Irá abrir novamente o modo interativo do Cypress, porém, desta vez a forma visual será feita usando um formato de tela em mobile.
4 - npm run testMobile -> O teste será feito de maneira headless e em modo mobile usando a resolução 410x860

## Support this project

If you want to support this project, leave a ⭐.

___

