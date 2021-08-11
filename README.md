Wed Aug 11 08:57:54 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       428Mi       6.3Gi       1.0Mi       962Mi       7.0Gi
Swap:          7.6Gi          0B       7.6Gi
System Storage
650M	.
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
    

Angular CLI: 12.2.0
Node: 14.17.4
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.0
@angular-devkit/build-angular   12.2.0
@angular-devkit/core            12.2.0
@angular-devkit/schematics      12.2.0
@schematics/angular             12.2.0
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.39s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.a38be260e94b7ffb40a4.js      | main          | 781.90 kB
styles.dd8a12ad2fe6c3153c56.css   | styles        |  71.40 kB
polyfills.f272ba295a668ed8a597.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.67 kB

Build at: 2021-08-11T14:59:15.387Z - Hash: 0c95ace19ae66940478f - Time: 34049ms
Done in 40.35s.
```
```bash
yarn run v1.22.11
$ ng test
11 08 2021 08:59:24.987:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
11 08 2021 08:59:24.989:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 08 2021 08:59:24.993:INFO [launcher]: Starting browser Firefox
11 08 2021 08:59:31.535:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket hZWOVTUfFwP_wdwlAAAB with id 87907969
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.211 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.281 secs / 0.233 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.51s.
```
