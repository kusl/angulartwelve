Wed Oct  6 05:09:19 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       966Mi       4.4Gi       8.0Mi       2.3Gi       6.4Gi
Swap:          7.6Gi       254Mi       7.4Gi
System Storage
662M	.
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
    

Angular CLI: 12.2.8
Node: 14.18.0
Package Manager: yarn 1.22.15
OS: linux x64

Angular: 12.2.8
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.8
@angular-devkit/build-angular   12.2.8
@angular-devkit/core            12.2.8
@angular-devkit/schematics      12.2.8
@angular/cdk                    12.2.9
@angular/material               12.2.9
@schematics/angular             12.2.8
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.65s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.03s.
```
```bash
yarn run v1.22.15
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.891eb59969a5271fd556.js      | main          | 781.89 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.b248f81e96b7538ae2da.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.77 kB

Build at: 2021-10-06T23:12:02.901Z - Hash: fa3bfdea0dec6b54bb0c - Time: 73457ms
Done in 79.79s.
```
```bash
yarn run v1.22.15
$ ng test
06 10 2021 17:12:20.808:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
06 10 2021 17:12:20.810:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 10 2021 17:12:20.815:INFO [launcher]: Starting browser Firefox
06 10 2021 17:12:28.458:INFO [Firefox 92.0 (Fedora 0.0.0)]: Connected on socket aUZc-9gLCkU0s6TKAAAB with id 56380615
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.248 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.248 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.265 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.286 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.326 secs / 0.286 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 25.98s.
```
