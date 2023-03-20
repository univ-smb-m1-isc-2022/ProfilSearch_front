# ProfilSearch

## But

* Écrire une application de sourcing de candidats


## Participants
* Louise BOLLARD
* Tom    THIERRY
* [opt]

## Fonctionnalités

Cette application est utilisée par une société cherchant à recruter des candidats :

* il y a une partie publique (destinée aux futurs candidats)
* un backoffice dédié a la gestion des offres et des candidatures

Le back office est accessible sur lien d'invitation ET via social login
(n'importe quel user du back office peut inviter un autre membre par mail)

Dans le back office, 
il est possible de définir une offre d'emploi suivant un template prédéfinit (sequence de paragraphe avec un titre, texte, liste de bullet points), un type de paragraphe special (header) peut contenir un logo
une offre d'emploi peut être publiée ou non

a chaque offre d'emploi peut être associé des questions de candidature aux quel le candidat devra répondre
ces questions peuvent être créer a la volée ou séléctionné a partir d'une bibliothéque de question (chaque question crééer est automatiquement ajoutée a lala bibliothéque)

il existe un site publique pour les candidats qui liste toute les offres d'emploi

Un Candidat peut postuler en ligne sur une offre d'emploi, la liste de question lui est alors présenté.
a la fin du questionnaire, le candidat recoit un mail contenant un lien lui permettant d'effacer sa candidature et les données associées


## si 3ème membre

Dans le back office : 

N'importe quel user du back office peut consulter la liste des utilisateurs et désactiver, aprés confirmation, un compte (l'utilisateur désactivé n'a plus access au backoffice, mais rien n'est supprimé)

introduction d'un workflow :

il est possible de revoir la liste de toutes les candidatures, avec les filtres suivants :
* non closes
* celles qui me sont assignées
* celles qui sont non assignées
* celles comportant un ou plusieurs tags

Revoir une candidature, consiste à ajouter un commentaire, optionnellement ajouter des tags, et choisir la prochaine action et assignee par example :
* réponse négative et assigner la tache a un utilisateur du backoffice
* 2 éme revue et assigner la tache a un utilisateur du backoffice
* réponse positive : à convoquer pour un entretien et assigner la tache a un utilisateur du backoffice
* Clore la candidature

 il existe un journal traquant toutes les actions des utilisateurs du backoffice
 il existe un journal traquant toutes les suppressions de candidatures a l'intiative des candidats


## Note

# Profilsearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
