Tue Dec  7 05:22:51 AM MST 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.4Gi       3.5Gi       3.0Mi       2.8Gi       6.0Gi
Swap:          7.6Gi        22Mi       7.6Gi
System Storage
736M	.
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
    

Angular CLI: 13.0.4
Node: 16.13.1
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.0.3
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1300.4
@angular-devkit/build-angular   13.0.4
@angular-devkit/core            13.0.4
@angular-devkit/schematics      13.0.4
@angular/cli                    13.0.4
@schematics/angular             13.0.4
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.35s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.76s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |      Size
main.71cb19955495ec77.js      | main          | 784.19 kB
styles.22a8cde6f1489681.css   | styles        |  72.56 kB
polyfills.46a8f0bf70111ef2.js | polyfills     |  36.93 kB
runtime.002dc9a692b8c2a2.js   | runtime       |   1.45 kB

| Initial Total | 895.13 kB

Build at: 2021-12-07T12:23:25.716Z - Hash: b7f11872276b55a8 - Time: 10273ms
Done in 14.21s.
```
```bash
yarn run v1.22.17
$ ng test
07 12 2021 05:23:33.227:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
07 12 2021 05:23:33.230:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 12 2021 05:23:33.236:INFO [launcher]: Starting browser Firefox
07 12 2021 05:23:41.560:INFO [Firefox 94.0 (Fedora 0.0.0)]: Connected on socket 6WqpUsIOmlwNvtatAAAB with id 71038004
Firefox 94.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 94.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.238 secs)
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.274 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 94.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.274 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.291 secs)
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.348 secs / 0.291 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.42s.
```
