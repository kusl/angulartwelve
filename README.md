Thu Oct  7 12:54:06 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.0Gi       4.3Gi       8.0Mi       2.3Gi       6.3Gi
Swap:          7.6Gi       275Mi       7.4Gi
System Storage
664M	.
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

Angular: 12.2.9
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.8
@angular-devkit/build-angular   12.2.8
@angular-devkit/core            12.2.8
@angular-devkit/schematics      12.2.8
@angular/cli                    12.2.8
@schematics/angular             12.2.8
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.09s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.85s.
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

Build at: 2021-10-07T07:09:53.493Z - Hash: fa3bfdea0dec6b54bb0c - Time: 34612ms
Done in 40.43s.
```
```bash
yarn run v1.22.15
$ ng test
07 10 2021 01:10:03.202:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
07 10 2021 01:10:03.205:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 10 2021 01:10:03.209:INFO [launcher]: Starting browser Firefox
07 10 2021 01:10:09.450:INFO [Firefox 92.0 (Fedora 0.0.0)]: Connected on socket tJ_rtKsnzkDukqL0AAAB with id 30313851
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.098 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.098 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.308 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.308 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.327 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.38 secs / 0.327 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.97s.
```
