Wed Sep  8 03:43:17 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       686Mi       5.1Gi       8.0Mi       1.9Gi       6.7Gi
Swap:          7.6Gi        54Mi       7.6Gi
System Storage
639M	.
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
    

Angular CLI: 12.2.5
Node: 14.17.6
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.5
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.5
@angular-devkit/build-angular   12.2.5
@angular-devkit/core            12.2.5
@angular-devkit/schematics      12.2.5
@schematics/angular             12.2.5
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.39s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.c4a4835374b0000d8bce.js      | main          | 781.86 kB
styles.86ecd0fb505353b32d1d.css   | styles        |  71.52 kB
polyfills.39105850d80d93db25ec.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.75 kB

Build at: 2021-09-08T21:44:31.262Z - Hash: ebf6a2de77bd676739b1 - Time: 35104ms
Done in 41.65s.
```
```bash
yarn run v1.22.11
$ ng test
08 09 2021 15:44:41.281:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
08 09 2021 15:44:41.283:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 09 2021 15:44:41.288:INFO [launcher]: Starting browser Firefox
08 09 2021 15:44:48.774:INFO [Firefox 91.0 (Fedora 0.0.0)]: Connected on socket ZH7wiPBHKVsxXg7MAAAB with id 17377358
Firefox 91.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.23 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.23 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.241 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.284 secs / 0.241 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.90s.
```
Wed Sep  8 03:44:49 PM MDT 2021
