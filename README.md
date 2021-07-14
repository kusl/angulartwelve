Wed Jul 14 05:06:05 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       416Mi       6.3Gi       1.0Mi       956Mi       7.0Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
586M	.
```
```bash
yarn run v1.22.10
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.1.1
Node: 14.17.3
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.1.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1201.1
@angular-devkit/build-angular   12.1.1
@angular-devkit/core            12.1.1
@angular-devkit/schematics      12.1.1
@schematics/angular             12.1.1
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.28s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.85s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.a3ee2f79381809a8d88f.js      | main          | 779.64 kB
styles.7a282889f194343b08e8.css   | styles        |  74.14 kB
polyfills.b837d33593aff40d4060.js | polyfills     |  36.66 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 891.86 kB

Build at: 2021-07-14T11:07:40.670Z - Hash: ee515584fa66c90e17fd - Time: 51612ms
Done in 56.60s.
```
```bash
yarn run v1.22.10
$ ng test
14 07 2021 05:07:49.382:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
14 07 2021 05:07:49.385:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 07 2021 05:07:49.389:INFO [launcher]: Starting browser Firefox
14 07 2021 05:07:57.860:INFO [Firefox 89.0 (Fedora 0.0.0)]: Connected on socket xFYcRqEVV-oE5Zl7AAAB with id 33338757
Firefox 89.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 89.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.334 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 89.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.334 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.388 secs)
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.469 secs)
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.626 secs / 0.469 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.38s.
```
Wed Jul 14 05:07:59 AM MDT 2021
