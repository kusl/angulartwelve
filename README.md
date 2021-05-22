Fri May 21 08:16:20 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.3Gi       4.3Gi       161Mi       1.1Gi       5.0Gi
Swap:          7.7Gi       574Mi       7.1Gi
System Storage
411M	.
```
```bash
yarn run v1.22.10
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.0.0
Node: 14.17.0
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.0.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.0
@angular-devkit/build-angular   12.0.0
@angular-devkit/core            12.0.0
@angular-devkit/schematics      12.0.0
@angular/cli                    12.0.0
@schematics/angular             12.0.0
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 0.94s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.c5fd909029a5810c0859.js      | main          | 764.56 kB
styles.92908ca9efaf73abe875.css   | styles        |  73.95 kB
polyfills.8ee0a7244bb8c2240744.js | polyfills     |  36.64 kB
runtime.3de57b8d40632216d729.js   | runtime       |   1.41 kB

| Initial Total | 876.56 kB

Build at: 2021-05-22T02:18:13.603Z - Hash: 1c10303ccd4c2b4c2f74 - Time: 81552ms
Done in 85.31s.
```
```bash
yarn run v1.22.10
$ ng test
21 05 2021 20:18:22.152:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9877/
21 05 2021 20:18:22.154:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 05 2021 20:18:22.159:INFO [launcher]: Starting browser Firefox
21 05 2021 20:18:32.032:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket V5EhsDDa45ohGX7jAAAB with id 40106194
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.202 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.202 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.216 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.236 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.292 secs / 0.236 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.72s.
```
