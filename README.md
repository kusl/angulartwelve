Fri Nov  5 09:57:16 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.4Gi       2.7Gi       8.0Mi       3.5Gi       5.8Gi
Swap:          7.6Gi       6.0Mi       7.6Gi
System Storage
665M	.
```
```bash
yarn run v1.22.17
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.12
Node: 16.13.0 (Unsupported)
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 12.2.12
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.12
@angular-devkit/build-angular   12.2.12
@angular-devkit/core            12.2.12
@angular-devkit/schematics      12.2.12
@schematics/angular             12.2.12
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.13s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.2486915f94ed5efc98aa.js      | main          | 782.39 kB
styles.7b542be83b9716935ce6.css   | styles        |  71.63 kB
polyfills.0c845c6887438ec24423.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 892.38 kB

Build at: 2021-11-05T15:58:35.896Z - Hash: a60ed4a47854074ef909 - Time: 35863ms
Done in 43.95s.
```
```bash
yarn run v1.22.17
$ ng test
05 11 2021 09:58:45.839:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
05 11 2021 09:58:45.843:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 11 2021 09:58:45.854:INFO [launcher]: Starting browser Firefox
05 11 2021 09:58:53.389:INFO [Firefox 94.0 (Fedora 0.0.0)]: Connected on socket gFO8COgH3f7RvI95AAAB with id 58569641
Firefox 94.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 94.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.086 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 94.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.086 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.259 secs)
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.286 secs)
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.329 secs / 0.286 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.87s.
```
