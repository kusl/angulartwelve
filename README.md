Wed May 19 05:18:59 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       649Mi       5.1Gi       8.0Mi       1.9Gi       6.7Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
405M	.
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
    
Done in 0.95s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.80s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.e4ea11ebffd8b188f278.js      | main          | 551.38 kB
styles.92908ca9efaf73abe875.css   | styles        |  73.95 kB
polyfills.8ee0a7244bb8c2240744.js | polyfills     |  36.64 kB
runtime.3de57b8d40632216d729.js   | runtime       |   1.41 kB

| Initial Total | 663.37 kB

Build at: 2021-05-19T23:20:38.112Z - Hash: cc5b2f09a3cbef26e931 - Time: 82281ms
Done in 86.10s.
```
```bash
yarn run v1.22.10
$ ng test
19 05 2021 17:20:46.722:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
19 05 2021 17:20:46.724:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 05 2021 17:20:46.727:INFO [launcher]: Starting browser Firefox
19 05 2021 17:20:57.661:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket D_5ml-ywdLuDK3ldAAAB with id 48135313
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.075 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.075 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.105 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.125 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.152 secs / 0.125 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 19.69s.
```
Wed May 19 05:20:58 PM MDT 2021
