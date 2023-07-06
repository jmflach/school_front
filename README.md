# school_front

Single Page Application (front-end) para uma escola, utilizando **ReactJS**. Nesta aplicação, são gerenciadas as informações dos alunos da escola, permitindo a criação, leitura, atualização e exclusão dos registros. Além disso, há um sistema de autenticação que utiliza **JWT** (JSON Web Tokens) para efetuar a autorização dos usuários para a utilização dos serviços e visualização das páginas.

## Projeto

Para realizar este projeto, foi decidido que a aplicação seria uma aplicação de uma única página (Single Page Application), com o nosso código lidando com as mudanças de páginas internas.

### Signin e Signup

Quando entramos na aplicação, temos uma página de **signin**, onde o usuário pode entrar com sua conta (e-mail e senha). Caso não possua uma conta, há um botão que direciona para uma página de **signup**, onde o usuário pode criar uma nova conta. Quando o usuário loga no sistema, ele recebe um token JWT que será utilizado para realizar requisições ao back-end sem que o usuário precise digitar suas credenciais novamente.

### Home

Tendo logado no sistema, o usuário é direcionado para a página **home**, que é a página inicial da aplicação. Essa página pode conter imagens e informações sobre a escola. Atualmente possui uma imagem para ilustração do conceito.

Podemos utilizar os links presentes no cabeçalho para navegar entre as páginas da aplicação.

### Estudantes

A página **students** é a principal da aplicação. Nela, somos apresentados com uma lista de todos os estudantes cadastrados. Para adicionar um novo aluno, clicamos no botão "Adicionar Novo" e então, um card é aberto com um formulário para inserirmos as informações do novo aluno. Foi decidido que a foto do aluno será um arquivo enviado pelo formulário, e não um link para uma imagem, já que em uma escola, provavelmente a foto do aluno estaria no computador local, e não em outro servidor.

Para ver detalhes de um estudante, podemos clicar no botão "Ver" ao lado do estudante. Um card irá abrir mostrando todas as informações de um determinado estudante. Como já temos as informações de todos os alunos carregadas, foi decidido não realizar uma nova requisição para pegar as informações do aluno neste momento. Porém, esse endpoint existe no back-end e poderia ser utilizado em outro componente da aplicação.

No card onde vemos as informações de um aluno, são exibidas também as opções de deletar o aluno do sistema, ou de editá-lo. Ao clicar no botão "Excluir", o aluno é excluído do sistema. Ao clicar em "Editar", um novo card é aberto com um formulário similar ao de adicionar um novo aluno, mas com as informações do aluno já preenchidas, para facilitar o processo para o usuário.

Todas as modificações realizadas (adicionar, deletar, atualizar) são atualizadas automaticamente na página, sem que a página precise ser recarregada. Esse processo é realizado graças à funcionalidade do React de re-renderizar componentes separadamente.

### Log out

No canto superior direito da página também existe um botão de "Sair". Ao clicar neste botão, o usuário é redirecionado para a página de login e suas informações da sessão atual (JWT) são apagadas do navegador.

## Dados

Cada aluno possui os seguintes campos:

* nome
* sobrenome
* email
* telefone
* endereço
* data de nascimento
* foto

## Endpoints

Para esta aplicação funcionar, depende de uma API RESTful com os seguintes end-points:

Endpoint                | Método    | Descrição
----------------------- | --------  |-------------------
auth/signup             | POST      | Cria um novo usuário
auth/signin             | POST      | Autentica um usuário
students                | GET       | Retorna um array com todos os alunos
students/(:num)         | GET       | Retorna o aluno cujo id é (:num)
students/add            | POST      | Cria um novo aluno
students/update/(:num)  | POST      | Atualiza o aluno cujo id é (:num)
students/delete/(:num)  | DELETE    | Deleta o aluno cujo id é (:num)

## Instalação

1. Instale o **Node.js** e o **npm** em sua máquina. Apesar de não utilizarmos o Node.js para o backend, ele é necessário para que possamos rodar nosso projeto.

2. Clone este repositório e, na pasta raiz, rode o seguinte comando para instalar todas as dependências do projeto: 

    ```
    > npm install
    ```

3. Garanta que o back-end está de pé, e então, rode o seguinte comando para iniciar o servidor front-end:

    ```
    > npm start
    ```

4. Abra seu navegador no endereço `http://localhost:3000` para acessar a página da aplicação.


## Melhorias

O sistema está em pleno funcionamento, mas existem algumas melhorias a serem implementadas:

* Atualização da foto do aluno
    * Atualmente optamos por não permitir que a foto do aluno seja atualizada, pois o formulário de atualização é pré-carregado com as informações já salvas para facilitar o processo de atualização. Porém não há a possibilidade de pré-carregar a foto que já está salva. Para contornar isso, a solução seria criar um botão para atualizar somente a foto do aluno, como acontece em outros sistemas.
* Responsividade da aplicação
    * A aplicação é responsiva até certo ponto. Porém, é possível que este quesito seja melhorado em versões futuras.
* Salvar o token JWT fora do localStorage
    * O JWT está sendo salvo no localStorage. Uma possível melhoria seria alterar parra cookies.
