Sun Aug 22 04:00:12 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       741Mi       4.8Gi       8.0Mi       2.2Gi       6.6Gi
Swap:          7.6Gi       0.0Ki       7.6Gi
System Storage
637M	.
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
    

Angular CLI: 12.2.2
Node: 14.17.5
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.2
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.2
@angular-devkit/build-angular   12.2.2
@angular-devkit/core            12.2.2
@angular-devkit/schematics      12.2.2
@schematics/angular             12.2.2
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.08s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.86s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.02930c03972a63cba9fa.js      | main          | 781.86 kB
styles.dd8a12ad2fe6c3153c56.css   | styles        |  71.40 kB
polyfills.ce68c84801861e1806dc.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.63 kB

Build at: 2021-08-22T22:01:17.172Z - Hash: 020dc7b90fc987323041 - Time: 35128ms
Done in 40.43s.
```
```bash
yarn run v1.22.11
$ ng test
22 08 2021 16:01:26.952:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
22 08 2021 16:01:26.954:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 08 2021 16:01:26.959:INFO [launcher]: Starting browser Firefox
22 08 2021 16:01:34.321:INFO [Firefox 91.0 (Fedora 0.0.0)]: Connected on socket UAXN8HxaEUfXyCgIAAAB with id 74627831
Firefox 91.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.08 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.08 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.228 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.257 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.296 secs / 0.257 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.57s.
```
Sun Aug 22 04:01:35 PM MDT 2021
