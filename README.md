Tue Nov 29 08:00:33 AM MST 2022

# Angular Twelve

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.3Gi       1.1Gi       1.0Mi       4.2Gi       5.0Gi
Swap:          7.7Gi       0.0Ki       7.7Gi
System Storage
628M	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.0.1
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.1
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.1
@angular-devkit/build-angular   15.0.1
@angular-devkit/core            15.0.1
@angular-devkit/schematics      15.0.1
@angular/cdk                    15.0.0
@angular/material               15.0.0
@schematics/angular             15.0.1
rxjs                            6.6.7
typescript                      4.8.2
    
Done in 1.11s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.88s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
Latest version:     1.0.30001434
Installed versions: 1.0.30001228, 1.0.30001284, 1.0.30001388, 1.0.30001434
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning Pattern ["caniuse-lite@^1.0.30001434"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-caniuse-lite-1.0.30001434-ec1ec1cfb0a93a34a0600d37903853030520a4e5-integrity/node_modules/caniuse-lite" as pattern ["caniuse-lite@^1.0.30001426","caniuse-lite@^1.0.30001400","caniuse-lite@^1.0.30001219","caniuse-lite@^1.0.30001370","caniuse-lite@^1.0.30001280"]. This could result in non-deterministic behavior, skipping.
warning " > @sentry/angular@7.12.1" has incorrect peer dependency "@angular/common@10.x || 11.x || 12.x || 13.x || 14.x".
warning " > @sentry/angular@7.12.1" has incorrect peer dependency "@angular/core@10.x || 11.x || 12.x || 13.x || 14.x".
warning " > @sentry/angular@7.12.1" has incorrect peer dependency "@angular/router@10.x || 11.x || 12.x || 13.x || 14.x".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > @sentry/angular@7.12.1" has incorrect peer dependency "@angular/common@10.x || 11.x || 12.x || 13.x || 14.x".
warning " > @sentry/angular@7.12.1" has incorrect peer dependency "@angular/core@10.x || 11.x || 12.x || 13.x || 14.x".
warning " > @sentry/angular@7.12.1" has incorrect peer dependency "@angular/router@10.x || 11.x || 12.x || 13.x || 14.x".
caniuse-lite has been successfully updated

Target browser changes:
- and_chr 96
+ and_chr 107
- and_ff 94
+ and_ff 106
- and_qq 10.4
+ and_qq 13.1
- and_uc 12.12
+ and_uc 13.4
- android 96
+ android 107
- baidu 7.12
+ baidu 13.18
- chrome 96
- chrome 95
- chrome 94
+ chrome 107
+ chrome 106
+ chrome 105
- edge 96
- edge 95
+ edge 107
+ edge 106
+ edge 105
- firefox 94
- firefox 93
+ firefox 107
+ firefox 106
+ firefox 105
- ios_saf 15.0-15.1
- ios_saf 14.0-14.4
- ios_saf 12.2-12.5
+ ios_saf 16.1
+ ios_saf 16.0
+ ios_saf 15.6
+ ios_saf 15.5
- op_mob 64
+ op_mob 72
- opera 81
- opera 80
+ opera 92
+ opera 91
- safari 15.1
- safari 15
- safari 14.1
- safari 13.1
+ safari 16.1
+ safari 16.0
+ safari 15.6
- samsung 15.0
- samsung 14.0
+ samsung 19.0
+ samsung 18.0
```
```bash
yarn run v1.22.19
$ ng build --configuration production
    Components styles sourcemaps are not generated when styles optimization is enabled.
- Generating browser application bundles (phase: setup)...
Processing legacy "View Engine" libraries:
- @sentry/angular [es2015/esm2015] (git://github.com/getsentry/sentry-javascript.git)
Encourage the library authors to publish an Ivy distribution.
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.

Error: src/main.ts:12:5 - error TS2322: Type 'BrowserTracing' is not assignable to type 'Integration'.
  Types of property 'setupOnce' are incompatible.
    Type '(_: (callback: EventProcessor) => void, getCurrentHub: () => Hub) => void' is not assignable to type '(addGlobalEventProcessor: (callback: EventProcessor) => void, getCurrentHub: () => Hub) => void'.
      Types of parameters '_' and 'addGlobalEventProcessor' are incompatible.
        Types of parameters 'callback' and 'callback' are incompatible.
          Type 'import("/home/kushal/src/angular/angulartwelve/node_modules/@sentry/hub/node_modules/@sentry/types/dist/eventprocessor").EventProcessor' is not assignable to type 'import("/home/kushal/src/angular/angulartwelve/node_modules/@sentry/types/types/eventprocessor").EventProcessor'.
            Types of parameters 'event' and 'event' are incompatible.
              Type 'import("/home/kushal/src/angular/angulartwelve/node_modules/@sentry/types/types/event").Event' is not assignable to type 'import("/home/kushal/src/angular/angulartwelve/node_modules/@sentry/hub/node_modules/@sentry/types/dist/event").Event'.
                Types of property 'level' are incompatible.
                  Type 'SeverityLevel | Severity | undefined' is not assignable to type 'Severity | undefined'.
                    Type '"error"' is not assignable to type 'Severity | undefined'.

12     new Integrations.BrowserTracing({
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
13       tracingOrigins: ["localhost", "https://yourserver.io/api"],
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
14       routingInstrumentation: Sentry.routingInstrumentation,
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
15     }),
   ~~~~~~


Error: src/main.ts:14:7 - error TS2328: Types of parameters 'customStartTransaction' and 'customStartTransaction' are incompatible.
  Type 'T | undefined' is not assignable to type 'Transaction | undefined'.
    Type 'T' is not assignable to type 'Transaction | undefined'.
      Type 'import("/home/kushal/src/angular/angulartwelve/node_modules/@sentry/hub/node_modules/@sentry/types/dist/transaction").Transaction' is not assignable to type 'import("/home/kushal/src/angular/angulartwelve/node_modules/@sentry/types/types/transaction").Transaction'.
        Type 'T' is not assignable to type 'Transaction'.
          Type 'Transaction' is missing the following properties from type 'Transaction': setMeasurement, setMetadata, getBaggage

14       routingInstrumentation: Sentry.routingInstrumentation,
         ~~~~~~~~~~~~~~~~~~~~~~



error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Tue Nov 29 08:02:22 AM MST 2022
Tue Nov 29 08:02:41 AM MST 2022
yarn version v1.22.19
info Current version: 0.0.89
info New version: 0.0.90
Done in 0.21s.
