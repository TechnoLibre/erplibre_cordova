# Aliments Angular Capacitor

Il faut s'assurer d'avoir une version de Node.js supportée par Angular.

Pour vérifier si votre version est compatible, vous pouvez faire la commande `ng version`.
Si vous recevez un message vous disant que votre version de Node.js n'est pas compatible avec Angular, il est recommandé de changer de version.

## Changer l'URL vers ERPLibre dans les fichiers de configuration

L'URL vers ERPLibre doit être changée dans les fichiers de configuration.
Les fichiers de configuration se trouvent dans `src/environments`.
Il y a un fichier pour l'environnement de développement et l'environnement de production.
Il faut aussi changer l'URL configurée dans `proxy.conf.json`.
Le proxy est démarré automatiquement lorsqu'on exécute l'application avec `ng serve` comme configuré dans `angular.json`.

## Installer les module ERPLibre nécessaires

Pour que l'application fonctionne, il faut installer deux modules dans ERPLibre.
Le premier est le module [restful](https://github.com/ajepe/odoo-addons/tree/12.0/restful) par ajepe.
Le deuxième est le module [xmlrpc_base](https://github.com/RafHuardTL/erplibre_addons/tree/12.0_xmlrpc).
