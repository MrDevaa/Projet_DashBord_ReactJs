<style>
    .g{color: green}  
    .y{color: yellow}  
    .c{color: cyan}  
</style>

<span class="g">commande</span> <span class="g"></span>  
<span class="y">fichier/dossier</span> <span class="y"></span>  
<span class="c">éléments</span> <span class="c"></span>  
Tuto pour SYMFONY 7.0.\*

## Installation [lien tuto](https://symfony.com/doc/current/setup.html)

- si Symfony est installé  
   commande: <span class="g">symfony new my_project_directory --version="7.0.\*" --webapp</span> (créer un projet )

- si il n'est pas installer  
   installer composer ([Lien d'installation](https://getcomposer.org/download/)) cliquer sur "Composer-Setup.exe"  
   redémarrer VsCode  
   commande: <span class="g">composer create-project symfony/skeleton:"7.0.\*" mon_projet</span> (créer un projet)  
   commande: <span class="g">cd mon_projet</span> (entre dans le dossier du projet)  
   commande: <span class="g">composer require webapp</span> (ajouter les composants pour une app complète)

## Récupérer un projet par GIT

- si vous récupérer votre projet depuis git, il vous manquera les fichiers composer  
   commande: <span class="g">composer install</span> (installe tout les composer de votre projet)

## Démarrer le serveur Symfony

- si le CLI de symfony est installer  
   commande: <span class="g">symfony server:start</span> (lance le serveur et vous donne le lien (alt + clic sur l'ip pour l'ouvrir))
- sinon avec PHP  
   commande: <span class="g">php -S 127.0.0.1:8000 -t public</span> (lance le serveur et vous donne le lien (alt + clic sur l'ip pour l'ouvrir))

ces commandes vont lancer un serveur à l'adresse ([http://127.0.0.1:8000/](http://127.0.0.1:8000/))  
une fois le serveur lancer vous ne pouvez plus utiliser la console utiliser pour le démarrage et devez donc en ouvrire une autre

## Établire la connexion à PhpMyAdmin

- allez dans le fichier <span class="y">.env</span> (racine du projet)  
   commenté la ligne 29 et décommenté la ligne 28  
   ligne 28 : DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=10.11.2-MariaDB&charset=utf8mb4"  
   app = root (en local)  
   !ChangeMe! = mot de passe (supprimer si vous êtes local)  
   2eme app = nom que vous voulez donner à votre base de données

- créer la base de donner  
   commande: <span class="g">php bin/console doctrine:database:create</span> (créer la base de donnée)

## Créer une table (Entity)

- créer une table (Entity)  
   commande: <span class="g">php bin/console make:entity NomTable</span> (remplacez NomTable par le nom de votre table avec une MAJ)  
   suivez les instructions pour créer chaque colonne

- éditer une table (Entity)  
   commande: <span class="g">php bin/console make:entity NomTable</span> (remplacez NomTable par le nom de la table à modifier)  
   suivez les instructions pour ajouter des colonnes

- mettre à jour sur PhpMyAdmin  
   commande: <span class="g">php bin/console make:migration</span> (prépare la mise à jour)  
   commande: <span class="g">php bin/console doctrine:migrations:migrate</span> (envoie la commande)

- autre commandes  
   commande: <span class="g">php bin/console doctrine:schema:update --dump-sql</span> (permet de voir la commande qui en préparation)  
   commande: <span class="g">php bin/console doctrine:schema:update --force</span> (force l'éxecution de la commande en préparation (à évité))

## Créer une table (Entity) User

- créer la table  
   commande: <span class="y">php bin/console make:user</span> (cette commande va créer une table User avec 3 colonnes, mail, password et role)
- créer le formulaire d'inscription  
   commande: <span class="g">php bin/console make:registration-form</span>
- créer le formulaire de login  
   commande: <span class="g">php bin/console make:auth</span> (la VUE du login se trouvera dans <span class="y">template/security</span>)  
   0 : on le fait nous-mêmes
  1 : il le fait avec email et password

## fonction réinitialiser mot de passe

- installation du bundle "reset-password-bundle" [lien tuto](https://github.com/symfonycasts/reset-password-bundle)
  commande: <span class="g">composer require symfonycasts/reset-password-bundle</span>
- creation des fichiers
  commande: <span class="g">php bin/console make:reset-password</span>
  vous demandera : choix de la redirection (app_login) , l'adresse qui envoie les mails, le nom du bot (attention il sera visible dans le mail d'envoie)
- update la base de donnée
  commande: <span class="g">php bin/console make:migration</span>
- config le mailer (gmail)
  commande: <span class="g">composer require symfony/google-mailer </span>
  aller dans le fichier <span class="y">.env</span> et décommenté la varible <span class="c">MAILER_DNS</span> voici comment la config: MAILER_DSN=gmail+smtp://adresse.exemple@gmail.fr:xxxx%20xxxx%20xxxx%20xxxx@default (remplacer adresse.exemple@gmail.fr par votre adresse et xxxx%20xxxx%20xxxx%20xxxx par votre mot de passe d'application (les %20 représente les espaces))
- le style / label
  pour modifier le style les fichiers sont dans <span class="y">templates/reset_password</span>
  et pour les label <span class="y">src/form/ResetPasswordRequestFormType.php</span>
- ça ne marche toujours pas ?
  commande: <span class="g">php bin/console messenger:consume async</span>

## Créer une relation entre deux table (Entity)