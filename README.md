Tue Oct 26 06:52:49 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       694Mi       4.6Gi       9.0Mi       2.4Gi       6.7Gi
Swap:          7.6Gi       305Mi       7.4Gi
System Storage
675M	.
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
    
Done in 1.16s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.88s.
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

Build at: 2021-10-27T01:08:34.787Z - Hash: b7a0c1043e60847ce3e0 - Time: 34873ms
Done in 40.39s.
```
```bash
yarn run v1.22.17
$ ng test
26 10 2021 19:08:44.313:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
26 10 2021 19:08:44.315:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 10 2021 19:08:44.318:INFO [launcher]: Starting browser Firefox
26 10 2021 19:08:52.206:INFO [Firefox 93.0 (Fedora 0.0.0)]: Connected on socket Rxrx0of-oypjnb8nAAAB with id 42890059
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.087 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.087 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.122 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.122 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.279 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.322 secs / 0.279 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.98s.
```
Tue Oct 26 07:08:53 PM MDT 2021
