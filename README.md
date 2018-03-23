# MyChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Angular Configuration:

AngularCLI
npm install -g @angular/cli

Local
npm install--sav-dev @angular/cli

Create Project:
ng new <projectname>

Run the Project:
ng serve

Add Bootstrap
npm install --save bootstrap //npm install --save bootstrap -g

added node angularcli for bootsrtap
 "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],

Added font-awsome:
>npm install font-awesome --save

"styles": [
                "styles.css",
                "../node_modules/bootstrap/dist/css/bootstrap.css",
                "../node_modules/font-awesome/css/font-awesome.css" // -here webpack will automatically build a link css element out of this!?
             ],
eg:
 <i class="fa fa-american-sign-language-interpreting fa-5x" aria-hidden="true"> </i>    

Check for update:
npm install -g npm-check-updates

Check for updated version
ncu -u

----------
Chat- App
----------
Angular Firebase
npm install --save firebase angularfire2

app.module.ts:
Add below import
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

 AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
	
environment.ts
create the environment variable for fireebase



