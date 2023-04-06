Thu Apr  6 08:00:06 AM MDT 2023

# Angular Twelve

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.6Gi       3.0Gi       665Mi       112Mi       4.0Gi       4.2Gi
Swap:          7.6Gi        11Mi       7.6Gi
System Storage
1019M	.
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
    

Angular CLI: 15.2.5
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.5
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.5
@angular-devkit/build-angular   15.2.5
@angular-devkit/core            15.2.5
@angular-devkit/schematics      15.2.5
@schematics/angular             15.2.5
rxjs                            6.6.7
typescript                      4.8.2
    
Done in 1.43s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
Latest version:     1.0.30001474
Installed version:  1.0.30001474
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
Thu Apr  6 08:03:28 AM MDT 2023
Thu Apr  6 08:03:47 AM MDT 2023
yarn version v1.22.19
info Current version: 0.0.132
info New version: 0.0.133
Done in 0.21s.
