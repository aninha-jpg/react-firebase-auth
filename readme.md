# 🔐 Sistema de Autenticação com React e Firebase

Aplicação web desenvolvida em **React** utilizando **React Router Dom**, **Firebase Authentication** e **Cloud Firestore**.

O projeto possui três páginas principais: **Login, Cadastro e Principal**, com autenticação de usuários e armazenamento dos dados no Firestore.

## 🚀 Tecnologias utilizadas

* React
* React Router Dom
* Firebase Authentication
* Cloud Firestore
* JavaScript
* HTML
* CSS

## 📄 Funcionalidades

### Cadastro

O usuário pode realizar seu cadastro informando:

* Nome
* Sobrenome
* E-mail
* Data de nascimento
* Senha

O e-mail e a senha são utilizados no **Firebase Authentication**.

Os demais dados são armazenados no **Cloud Firestore**, juntamente com o UID gerado pelo Firebase Authentication.

Também são realizadas validações de:

* E-mail válido
* Senha com no mínimo 8 caracteres
* E-mail já cadastrado

### Login

O usuário pode acessar sua conta utilizando e-mail e senha.

Caso os dados estejam incorretos, uma mensagem é apresentada na tela.

Após o login realizado com sucesso, o usuário é direcionado para a página principal.

### Página Principal

Após a autenticação, a aplicação busca no Firestore os dados associados ao UID do usuário autenticado e apresenta:

* Nome
* Sobrenome
* Data de nascimento

Usuários que não estão autenticados são redirecionados para a página de Login.

## 🗂️ Estrutura do projeto

```text
src/
├── paginas/
│   ├── cadastro/
│   │   ├── index.js
│   │   └── style.css
│   │
│   ├── home/
│   │   ├── index.js
│   │   └── style.css
│   │
│   └── login/
│       ├── index.js
│       └── style.css
│
├── Firebase.js
├── Rotas.js
```
<!-- Teste de CI -->