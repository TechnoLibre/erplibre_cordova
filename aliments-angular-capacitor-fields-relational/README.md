# Aliments Angular Capacitor

Cette application, basée sur mon défi, utilise Angular et Capacitor. Elle est fonctionnelle à la fois sur le navigateur et nativement sur un appareil Android.

## Vérification de la version de Node.js

<details>
	<summary>Ouvrir</summary>

<br>Il faut s'assurer d'avoir une version de Node.js supportée par Angular.<br><br>
Pour vérifier si votre version est compatible, vous pouvez faire la commande `ng version`.
Si vous recevez un message vous disant que votre version de Node.js n'est pas compatible avec Angular, il est recommandé de changer de version.

[Cet article] offre quelques options pour installer Node.js.

</details>

## Création d'une application Capacitor avec Angular

<details>
	<summary>Ouvrir</summary>

<br>Si l'application a déjà été créée, il n'est pas nécessaire de faire l'installation. Vous pouvez [passer aux prochaines sections](#exécution-de-lapplication-android).

Il faut débuter par une application Angular. Pour cet exemple, j'ai utilisé [Angular CLI](https://angular.io/tutorial/tour-of-heroes/toh-pt0#create-a-new-workspace-and-an-initial-application).

La première commande crée le dossier de projet Angular dans le répertoire courant.

```
ng new nom_du_projet
```

Pour obtenir la même installation que sur ce projet à ses débuts, il faut accepter d'installer le routage d'Angular et il faut choisir SCSS comme préprocesseur CSS.

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

Si vous n'avez pas Android Studio, il faut l'installer. Si vous avez une erreur même si Android Studio est installé sur votre machine, vous pouvez pointer la variable CAPACITOR_ANDROID_STUDIO_PATH vers le script d'exécution d'Android Studio dans le répertoire où l'applicaiton est installée.

[Ce guide officiel](https://developer.android.com/studio/install#linux) montre comment installer Android Studio.

Si vous avez une erreur concernant la version d'AGP (Android Gradle Plugin), il est possible que l'installation d'Android Studio sur votre machine soit trop vieille pour la version d'AGP que Capacitor utilise. Il va alors falloir mettre à jour Android Studio.

</details>

## Construction de l'application pour la production

<details>
	<summary>Ouvrir</summary>

<br>Pour construire l'application en production, il faut faire `ng build --configuration production`. `ng build --prod` est obsolète depuis Angular 12 et a été supprimé dans Angular 14.

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

## Travailler avec les champs Many2many

<details>
	<summary>Ouvrir</summary>

<br>Afin de faire des modifications avec les champs Many2many, nous devons formatter nos données d'une certaine manière et utiliser une fonctionnalité de l'API pour faire les modifications correctement.

Premièrement, dans ERPLibre, lorsqu'on veut faire des modifications à un champ Many2many, on doit choisir ce que les données qu'on envoie vont faire. Ce comportement est défini par un chiffre qui se trouve dans le tuple qu'on envoie à ERPLibre. [Ce guide](https://gist.github.com/hmrodrigues/aa532f41b5ffc1d85fcd0277a2a60911) montre les différents nombres possibles, leur signification et le formattage attendu de la part de ERPLibre. Puisque cette application utilise TypeScript, nous ne pouvons pas utiliser de tuples, mais puisque les tuples sont essentiellement des listes immuables, on peut utiliser des listes à la place. Alors, le code `[(6, 0, [29, 35])]` devient `[[6, 0, [29, 35]]]`.

Deuxièmement, lorsqu'on envoie une requête vers l'API, on doit suffixer les noms des champs relationnels avec `__api__` pour que l'envoi fonctionne. Alors, si on a un champ `aliments` dans le modèle `Recette`, on doit envoyer les données dans la requête avec le nom de champ `__api__aliments`.

</details>

## Débuggage sur appareils Android

<details>
	<summary>Ouvrir</summary>

<br>Il est possible d'ouvrir les outils de développement Chrome sur un appareil physique Android qui est en train d'exécuter l'application en entrant l'URL `chrome://inspect` dans la barre de recherche sur Google Chrome et sur Chromium. Cette fonctionnalité permet d'utiliser les outils de développement Chrome sur l'appareil comme si c'était un site web.

</details>
