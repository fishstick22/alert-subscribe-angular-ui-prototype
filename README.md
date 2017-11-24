# AlertSubscribeAngularUiPrototype

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

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

## Deploying to GitHub Pages

Install `npm i -g angular-cli-ghpages` 
Run `ng build --env=prod-ngh --base-href "https://{username}.github.io/alert-subscribe-angular-ui-prototype/"`
Run `ngh`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Custom setup notes...

Absolute paths with Angular and Webpack [ref](https://psamsotha.github.io/angular/2017/03/18/angular-webpack-absolute-paths.html): set baseUrl in tsconfig.json
-- now can use absolute imports everywhere without all that ../../../garbage

Install/enable Bootstrap, FontAwesome: 
yarn add bootstrap@4.0.0-beta.2
yarn add font-awesome
add imports to styles.scss

Using Sass with the Angular CLI [ref](https://scotch.io/tutorials/using-sass-with-the-angular-cli): create src/assets/scss and put _variables.scss & other imports there, modify styles entry in .angular-cli.json
component scss files can then just @import '~assets/scss/drag-drop'; 
-- now everything nice and neat in one place!

Other packages to (yarn) add and import (into app.module.ts):
@ng-bootstrap/ng-bootstrap
angular-in-memory-web-api

Environments for developing with/without in-memory web api:
create environments/environment.dev-api.ts, etc
update .angular-cli.json

Defining global constants in environment-specific way [ref](https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063):
create/import app.config.ts, then can use environment imports to assign values

Testing folder [ref](https://angular.io/guide/testing#stubbing-the-routerlink): src/testing folder contains helpers and routerlink stub directive for test cases
this must be added to the src/tsconfig.app.json exclude "**/testing/*.ts"

Enable IE11 Polyfills: uncomment imports in polyfills.ts

Lint tweaks: tslint.json
"import-spacing": false -- allows aligning the from clauses
"no-inferrable-types": [false, "ignore-params"] -- rather see types regardless
