# Boas Vindas ao repositório do Desafio da Digital Republic!
  * Está branch corresponde a aplicação sem autenticação.
# Sumário
- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
- [Desenvolvimento](#desenvolvimento)
- [Para clonar o projeto](#para-clonar-o-projeto)
- [Regras de negócio](#regras-de-negócio)
- [Rotas](#rotas)
- [Deploy](#deploy)


# O que deverá ser desenvolvido

Desenvolver um web site para simular a quantidade de tinta nescessario para pintar uma parede.

# Desenvolvimento

Aplicação desenvolvida em `ReactJS`.

1. Development: Não precisa se autenticar para acessar o simulador de tinta
  * Branch `development-without-login`
  * Nesta branch, autenticação foi retirado
  * Os arquivos que continha autenticação ainda está na branch
  * Todas as rotas estão liberadas

# Para clonar o projeto

1. Clone o repositório
  * `git clone https://github.com/esionascimento/desafioDigitalRepublic.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd calculartinta`
2. Em seguida acessar a branch do Pull Request
  ```sh
    git checkout development-without-login
  ```
3. Instale as dependências e inicialize o projeto
 * Instale as dependências
    * `npm install`
 * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)

# Entregáveis

Temos, neste projeto, uma série de desafios.

# Regras de negócio

1. Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros, mas podem possuir alturas e larguras diferentes
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
  * 0,5 L
  * 2,5 L
  * 3,6 L
  * 18 L

# Rotas
A 3 rotas no projeto
Rotas `/`,`/dashboard`,`/resultado`

# Deploy
Deploy para auxiliar
1. Link sem login, podendo acessar as rotas sem autenticação
  * https://desafio-digital-republic-4kin3tog8-esionascimento.vercel.app/
  * https://desafio-digital-republic-4kin3tog8-esionascimento.vercel.app/dashboard
2. Link com login, algumas rotas precisa de autenticação
  * https://desafio-digital-republic-pkh57w5x0-esionascimento.vercel.app/

README baseado nos REDMEs da trybe
