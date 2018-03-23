# angular_chat

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


