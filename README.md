Sun Dec 18 03:55:15 PM MST 2022

# Angular Twelve

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       3.1Gi       582Mi       1.0Mi       4.0Gi       4.3Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
1.1G	.
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
    

Angular CLI: 15.0.3
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.3
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.3
@angular-devkit/build-angular   15.0.3
@angular-devkit/core            15.0.3
@angular-devkit/schematics      15.0.3
@angular/cdk                    15.0.2
@angular/material               15.0.2
@schematics/angular             15.0.3
rxjs                            6.6.7
typescript                      4.8.2
    
Done in 1.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.87s.
```
```bash
Latest version:     1.0.30001439
Installed version:  1.0.30001439
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
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
Sun Dec 18 03:58:17 PM MST 2022
Sun Dec 18 03:58:36 PM MST 2022
yarn version v1.22.19
info Current version: 0.0.99
info New version: 0.0.100
Done in 0.21s.
