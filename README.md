Thu Aug 12 07:50:57 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       459Mi       6.3Gi       1.0Mi       937Mi       7.0Gi
Swap:          7.6Gi          0B       7.6Gi
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
    
Done in 1.47s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.88s.
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

Build at: 2021-08-12T13:52:20.231Z - Hash: 3bd17266ce6d2c2f6c86 - Time: 35442ms
Done in 41.83s.
```
```bash
yarn run v1.22.11
$ ng test
12 08 2021 07:52:30.129:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
12 08 2021 07:52:30.132:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 08 2021 07:52:30.135:INFO [launcher]: Starting browser Firefox
12 08 2021 07:52:37.496:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket 0U1n7W_OJUYI6oDCAAAB with id 16596784
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.074 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.096 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.096 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.238 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.285 secs / 0.238 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.55s.
```
Thu Aug 12 07:52:38 AM MDT 2021
