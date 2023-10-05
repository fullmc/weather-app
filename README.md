# README

School project to get used to boilerplates to start a project from scratch.

- [README](#readme)
  - [Installation](#installation)
    - [npm init](#npm-init)
    - [Vite](#vite)
    - [Git ignore](#git-ignore)
  - [Jest](#jest)
  - [Tech Stack](#tech-stack)
    - [Client](#client)
    - [Code formatter](#code-formatter)
  - [Husky](#husky)
  - [API reference](#api-reference)
    - [Axios](#axios)
  - [Style](#style)

## Installation

Création :

- HTML : index.html
- CSS : style.css
- JS : main.js

### npm init 

```bash
npm init
```
Cette commande va générer un fichier `package.json`

### Vue
```
npm install vue
```

### Vite
```
npm install vite
```
On installe vite.js comme serveur de développement.
On peut aussi préciser la version voulue avec `npm install vite@version`.

- Création d'un dossier `node_modules` et d'un fichier `package-lock.json`.

Penser à rajouter la commande à exécuter pour lancer le serveur dans le `package.json``

```json
"scripts": {
    "dev": "vite"
  }
```
Puis `npm run dev` pour démarrer l'application.


### Git ignore

Ajouter un fichier `.gitignore` à la racine du projet pour ajouter tous les fichiers qui ne seront pas visibles sur github (ex. node_modules)

## [Jest](https://jestjs.io/docs/getting-started)

`npm install --save-dev jest`

Préciser le script pour lancer la commande qui exécutera le script.
```json
"scripts": {
    "test": "jest"
  }
```
Il est nécessaire d'avoir un fichier de test si vous décidez d'installer jest sinon vous rencontrerez un bug.

Exemple de fichier de test:
```js
// sum.js

function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```js
// sum.test.js

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

`npm run test` pour exécuter les tests Jest

## Tech Stack

#### Client:
- VueJS
- ViteJS

#### Code formatter: 
- ESLint : pour rendre le code plus uniforme 
```bash
npm install --save-dev eslint
```
```json
"scripts": {
    "lint": "eslint --ext .js,.vue .",
  }
```
- Créer un fichier `.eslintrc.json` à la racine du projet ou utiliser l'interactivité de la commande `eslint --init`.

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```
`npm run lint` Pour exécuter ESLint et vérifier le code JavaScript.

- Prettier

```bash
npm install --save-dev --save-exact prettier
```
- Créer un fichier `.prettierrc.json` à la racine du projet .
```json
{
  "tabWidth": 2,
  "singleQuote": true,
  "bracketSameLine": true,
  "trailingComma": "all"
}
```
```json
"scripts": {
    "format": "prettier --write \"*.js\"",
    "check": "prettier --check \"*.js\""
  }
```
`npm run format` pour exécuter prettier sur les fichiers js (ici, les fichiers concernés sont à la racine)

`npm run check` pour vérifier si les fichiers utilisent correctement prettier

### [Husky](https://typicode.github.io/husky/getting-started.html)

```bash
npx husky-init && npm install
```

Cela ajoute automatiquement un hook `pre-commit` qui lance `npm test` avant chaque commit.

## API Reference

### Axios

`npm install axios`

Exemple d'utilisation :

```
const axios = require('axios').default;
```
ou 
```
import axios from 'axios';
```
Si l'import est réalisé dans un script HTML, il faut que celui-ci soit chargé avec l'attribut type "module" : `<script type="module" src="main.js"></script>`, sinon il y aura une erreur.

- axios.get : pour récupérer des éléments de l'API (ici, un utilisateur avec un ID)
```
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // dans tous les cas
  });
```

## Style 

### [animate.css](https://animate.style/) 

```bash
npm i animate.css
``` 
installe une librairie d'animations en css .
Il faut ensuite l'importer dans le fichier de style :
`import 'animate.css';`

Exemple d'utilisation : 
`<h1 class="animate__animated animate__bounce">An animated element</h1>` 
 

