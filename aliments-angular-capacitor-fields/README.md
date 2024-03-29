# Aliments Angular Capacitor

Cette application, basée sur mon défi, utilise Angular et Capacitor. Elle est fonctionnelle à la fois sur le navigateur et nativement sur un appareil Android.

## Vérification de la version de Node.js

<details>
	<summary>Ouvrir</summary>

<br>Il faut s'assurer d'avoir une version de Node.js supportée par Angular.<br><br>
Pour vérifier si votre version est compatible, vous pouvez faire la commande `ng version`.
Si vous recevez un message vous disant que votre version de Node.js n'est pas compatible avec Angular, il est recommandé de changer de version.

Un programme comme [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) peut aider à gérer plusieurs versions de Node.js.

</details>

## Création d'une application Capacitor avec Angular

<details>
	<summary>Ouvrir</summary>

<br>Il faut débuter par une application Angular. Pour cet exemple, j'ai utilisé [Angular CLI](https://angular.io/tutorial/tour-of-heroes/toh-pt0#create-a-new-workspace-and-an-initial-application).

La première commande crée le dossier de projet Angular dans le répertoire courant.

```
ng new nom_du_projet
```

On peut ensuite aller dans le nouveau répertoire du projet et exécuter l'application générée par Angular CLI:

```
cd nom_du_projet
ng serve --open
```

Dans cet exemple, `--open` ouvre l'application dans le navigateur.

Ensuite, en suivant [ce guide officiel](https://capacitorjs.com/solution/angular), on ajoute Capacitor au projet Angular et on installe Android.

La première commande de cette étape est d'installer capacitor avec Angular:

```
ng add @capacitor/angular
```

Il faut ensuite installer les plateformes qu'on veut supporter au projet. Dans notre cas, puisqu'on utilise Android, on peut faire:

```
npm i @capacitor/android
npx cap add android
```

Pour construire l'application et pour copier les fichiers vers Android Studio, on peut exécuter cette commande:

```
npm run build
npx cap sync
```

Pour ouvrir Android Studio, on peut exécuter:

```
npx cap open android
```

</details>

## Exécution de l'application Android

<details>
	<summary>Ouvrir</summary>

<br>Pour exécuter l'application Android, il faut avoir installé la plateforme Android dans le projet. Si ce n'a pas été fait suite à la lecture du guide mentionné ci-dessus, [ce guide officiel](https://capacitorjs.com/docs/android#adding-the-android-platform) montre comment le faire et comment ouvrir Android Studio par la suite. [Ce guide officiel](https://developer.android.com/studio/install#linux) montre comment installer Android Studio.

</details>

## Changer l'URL vers ERPLibre dans les fichiers de configuration

<details>
	<summary>Ouvrir</summary>

<br>L'URL vers ERPLibre doit être changée dans les fichiers de configuration.
Les fichiers de configuration se trouvent dans `src/environments`.
Il y a un fichier pour l'environnement de développement et l'environnement de production.
Il faut aussi changer l'URL configurée dans `proxy.conf.json`.
Le proxy est démarré automatiquement lorsqu'on exécute l'application avec `ng serve` comme configuré dans `angular.json`.

</details>

## Installer les modules ERPLibre nécessaires

<details>
	<summary>Ouvrir</summary>

<br>Pour que l'application fonctionne, il faut installer deux modules dans ERPLibre.
Le premier est le module [restful](https://github.com/ajepe/odoo-addons/tree/12.0/restful) par ajepe.
Le deuxième est le module [rest](https://github.com/RafHuardTL/erplibre_addons/tree/12.0_rest).

</details>

## Utilisation de ng-bootstrap

<details>
	<summary>Ouvrir</summary>

<br>Afin de pouvoir faire la gestion des modals Bootstrap à l'intérieur des composants Angular, j'ai remplacé l'installation traditionnelle de Bootstrap par le module [ng-bootstrap](https://ng-bootstrap.github.io/#/home). Ce module permet de faire la manipulation de composants Bootstrap dans les fichiers TypeScript d'Angular. Le module permet aussi de faire certaines actions sur les modals à partir du HTML de nos composants, comme la fermeture ou la rejection des modals lorsqu'on clique sur les boutons de fermeture, par exemple.

</details>
