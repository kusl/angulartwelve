Mon Sep  6 04:08:49 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       607Mi       5.1Gi       8.0Mi       2.0Gi       6.8Gi
Swap:          7.6Gi       205Mi       7.4Gi
System Storage
653M	.
```
```bash
yarn run v1.22.11
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.4
Node: 14.17.6
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.4
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.4
@angular-devkit/build-angular   12.2.4
@angular-devkit/core            12.2.4
@angular-devkit/schematics      12.2.4
@schematics/angular             12.2.4
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.07s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.76c0d5e3802388c97a4c.js      | main          | 781.86 kB
styles.86ecd0fb505353b32d1d.css   | styles        |  71.52 kB
polyfills.ca7d6e8a20d8d44ab337.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.75 kB

Build at: 2021-09-06T10:17:12.498Z - Hash: aae30d40fe183e6434e1 - Time: 33627ms
Done in 38.43s.
```
```bash
yarn run v1.22.11
$ ng test
06 09 2021 04:17:22.020:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
06 09 2021 04:17:22.023:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 09 2021 04:17:22.026:INFO [launcher]: Starting browser Firefox
06 09 2021 04:17:27.511:INFO [Firefox 91.0 (Fedora 0.0.0)]: Connected on socket FzM1Yho5xVNKHsKgAAAB with id 30610608
Firefox 91.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.072 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.072 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.231 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.231 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.249 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.29 secs / 0.249 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 15.52s.
```
