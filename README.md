Wed Aug 11 11:15:47 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       902Mi       4.6Gi        10Mi       2.2Gi       6.5Gi
Swap:          7.6Gi        40Mi       7.6Gi
System Storage
651M	.
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
    

Angular CLI: 12.2.1
Node: 14.17.5
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.1
@angular-devkit/build-angular   12.2.1
@angular-devkit/core            12.2.1
@angular-devkit/schematics      12.2.1
@schematics/angular             12.2.1
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.23s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.89s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.80eef35a274642b9d1a4.js      | main          | 781.84 kB
styles.dd8a12ad2fe6c3153c56.css   | styles        |  71.40 kB
polyfills.5e4255d91d1b21ee6741.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.61 kB

Build at: 2021-08-12T05:16:58.585Z - Hash: 3bd17266ce6d2c2f6c86 - Time: 35494ms
Done in 41.46s.
```
```bash
yarn run v1.22.11
$ ng test
11 08 2021 23:17:08.373:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
11 08 2021 23:17:08.376:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 08 2021 23:17:08.379:INFO [launcher]: Starting browser Firefox
11 08 2021 23:17:14.987:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket Zqvz41rjklAL6DGpAAAB with id 50743423
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.303 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.303 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.321 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.349 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.427 secs / 0.349 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.93s.
```
