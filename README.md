Sun Oct 10 09:39:58 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       603Mi       4.9Gi       9.0Mi       2.2Gi       6.7Gi
Swap:          7.6Gi       282Mi       7.4Gi
System Storage
687M	.
```
```bash
yarn run v1.22.15
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.9
Node: 14.18.0
Package Manager: yarn 1.22.15
OS: linux x64

Angular: 12.2.9
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.9
@angular-devkit/build-angular   12.2.9
@angular-devkit/core            12.2.9
@angular-devkit/schematics      12.2.9
@schematics/angular             12.2.9
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.19s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
yarn run v1.22.15
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.891eb59969a5271fd556.js      | main          | 781.89 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.b248f81e96b7538ae2da.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.76 kB

Build at: 2021-10-11T03:55:42.736Z - Hash: fa3bfdea0dec6b54bb0c - Time: 35592ms
Done in 41.13s.
```
```bash
yarn run v1.22.15
$ ng test
10 10 2021 21:55:52.382:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
10 10 2021 21:55:52.384:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 10 2021 21:55:52.389:INFO [launcher]: Starting browser Firefox
10 10 2021 21:56:00.328:INFO [Firefox 93.0 (Fedora 0.0.0)]: Connected on socket HP_8N6L8T4zOrnYzAAAB with id 25608746
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.092 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.092 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.274 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.274 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.289 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.338 secs / 0.289 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.23s.
```
