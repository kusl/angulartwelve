Fri Oct 29 12:24:05 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       743Mi       4.6Gi        10Mi       2.3Gi       6.6Gi
Swap:          7.6Gi       334Mi       7.3Gi
System Storage
684M	.
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
    

Angular CLI: 12.2.11
Node: 14.18.1
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 12.2.11
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.11
@angular-devkit/build-angular   12.2.11
@angular-devkit/core            12.2.11
@angular-devkit/schematics      12.2.11
@schematics/angular             12.2.11
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.18s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.0d81e511ec8377049bd0.js      | main          | 782.30 kB
styles.7b542be83b9716935ce6.css   | styles        |  71.63 kB
polyfills.9fe43da8e7ae2e093011.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 892.30 kB

Build at: 2021-10-29T18:39:51.580Z - Hash: b7a0c1043e60847ce3e0 - Time: 34614ms
Done in 40.32s.
```
```bash
yarn run v1.22.17
$ ng test
29 10 2021 12:40:01.295:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
29 10 2021 12:40:01.297:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 10 2021 12:40:01.301:INFO [launcher]: Starting browser Firefox
29 10 2021 12:40:07.401:INFO [Firefox 93.0 (Fedora 0.0.0)]: Connected on socket i1D4IY03Jm5wy_XWAAAB with id 38340400
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.282 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.282 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.299 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.33 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.374 secs / 0.33 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.91s.
```
