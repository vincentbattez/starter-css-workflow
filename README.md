# starter-css-workflow avec webpack
Lien github : https://github.com/vincentbattez/starter-integration.html-js

# Getting start
```bash
npm i
npm run start
# CODE !
```
## Development
```bash
# For autocompile source files
npm run start
# OR For compile 
npm run build
```
## Production
```bash
# build production
npm run prod
```

## All commands
```bash
npm run build # For compile source files into dist folder
npm run dev   # same

npm run start # For autocompile source files into dist folder
npm run watch # same

npm run prod  # Build for production

npm run dploy # Deployement

npm run doc   # create documentation  js
```

# Deployement
Configurer le fichier `dploy.yaml` [Voir la documentation](https://lucasmotta.github.io/dploy/)
```bash
# Deployement
npm run dploy
```


# Add JS file
**1) Ajouter ton fichier JS dans l'une des catégories suivante :**
- resources/assets/js/<b>components</b>/ (btn, navbar, carrousel...)
- resources/assets/js/<b>pages</b>/ (JS uniquement sur des pages page spécifique)
- resources/assets/js/<b>commun.js</b> (Pour toute les pages)

**2.1) JS d'une page :**
```js
// dans le dossier : pages/TAPAGE.js
/*———————————————————————————————————*\
    $ TAPAGE
\*———————————————————————————————————*//*
  @required: <body id="page-TAPAGE">

*/
export default function(){
  if ($('#page-TAPAGE').length > 0) {
    console.log('TAPAGE.js');
  }
}
```
```js
// dans le dossier : ./app.js
import TAPAGE from './pages/TAPAGE';

jQuery(document).ready(function () {
  ...
  TAPAGE()
  ...
});
```

**2.2) JS d'un composant**
```js
// dans le dossier : components/TONCOMPOSANT.js
/*———————————————————————————————————*\
    $ TONCOMPOSANT
\*———————————————————————————————————*/
export function taFonction() {
  // Code de la fonction
  console.log('components/TONCOMPOSANT.js->taFonction()');
}
```
```js
// dans le dossier que tu le souhaite
/*———————————————————————————————————*\
  $ IMPORTS
\*———————————————————————————————————*/
import * as TONCOMPOSANT from './components/TONCOMPOSANT';

TONCOMPOSANT.taFonction();
```

# Add SCSS file
1) Créer ton fichier SCSS dans le dossier source
2) Import ton fichier SCSS dans app.scss

# Technos :
- SCSS
- JS
  - Jquery 3.2.1
- Webpack
  - **[dev]**  [Clean](https://github.com/johnagan/clean-webpack-plugin) (supprime le dossier de destination)
  - **[dev]**  [Sourcemap](https://webpack.js.org/configuration/devtool/) (chemin des fichiers d'origines)
  - **[both]** [babel-loader](https://github.com/babel/babel-loader) (ES6)
  - SCSS
    - **[both]** [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) (compile SASS & SCSS)
    - **[prod]** [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) (Minification du JS)
  - [Postcss](https://github.com/postcss/postcss-loader)
    - **[both]** [Autoprefixer](https://github.com/postcss/autoprefixer) (rajoute les prefix pour la compatiblité navigateur (voir browserslist dans package.json) )
    - **[both]** [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) (Concat les medias query) 
  - **[prod]** [Eslint](https://github.com/MoOx/eslint-loader) (Lint le JS)
  - **[prod]** [jsdoc](https://github.com/tcoopman/image-webpack-loader) (Création d'une doc JS)


# PROBLEM :
**problem 1**
<br>`problème quelconque`
> Supprimer package.lock.json & le dossier node_modules