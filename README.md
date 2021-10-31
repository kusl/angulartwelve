Sat Oct 30 09:20:37 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       977Mi       4.9Gi        12Mi       1.8Gi       6.4Gi
Swap:          7.6Gi       337Mi       7.3Gi
System Storage
687M	.
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
    
Done in 1.18s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.79s.
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

Build at: 2021-10-31T03:25:14.340Z - Hash: a60ed4a47854074ef909 - Time: 36875ms
Done in 42.88s.
```
```bash
yarn run v1.22.17
$ ng test
30 10 2021 21:25:24.313:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
30 10 2021 21:25:24.315:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 10 2021 21:25:24.320:INFO [launcher]: Starting browser Firefox
30 10 2021 21:25:31.764:INFO [Firefox 93.0 (Fedora 0.0.0)]: Connected on socket 1Nah2gwNPenJp2k-AAAB with id 11357497
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.086 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.086 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.113 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.113 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.276 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.315 secs / 0.276 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.46s.
```
