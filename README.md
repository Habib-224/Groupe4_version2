# ContactProjet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

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


------------------------------Function submitfunction-----------------------
NB: La function se trouve dans Authentification authentification.component.ts 
Ligne 77 :event.preventDefault(); :permet d'empecher le rechargement de la page
ligne 78 : on va verifier si le mail et le mot de passe de son pas vide
ligne 79 && 80 : on va recuper ce que l'on a saisi et les stocker dans email,et pass

let datastring = localStorage.getItem('user'); recuperer notre localStorage
let existingData = datastring ? JSON.parse(datastring) : []; Json.Parse converti le format json en un objet (on va verifier si il contient des valeurs)
let userFound = this.user.find(user => user.email === this.formData.email && user.password === this.formData.pass); on va verifier si le user existe si oui on entre dans la condition

ligne 88  if (userFound) on affiche le sweet alert et on le redirige vers l'acceuil grace a la ligne 96 
si il ne trouve pas le user il va automatiquement dans le else
------------------------------Fin Function Submit function------------------

------------------------------Function RegisterFunction--------------------
NB: La function se trouve dans Authentification authentification.component.ts
ligne 116 on verifie si les données saisies au niveau du formulaires ne 
sont pas vides. si oui on recupere notre localstorage a la ligne 117, et 
on converti notre localstorage en un objet pour pouvoir le manipuler a la ligne 118
ligne 119 on recupere la taille du tableau d'objet 
ligne 120 && 121 on recupere les donnes saisies dans le formulaire et on les stockes dans email et mot de passe 
ligne 132 a la ligne 137 on push ces informations dans le localstorage
ligne 140 on met a jour notre localstorage

-----------------------Fin Function RegisterFunction-----------------------


