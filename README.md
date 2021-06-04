Fri Jun  4 05:43:59 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       416Mi       6.3Gi       1.0Mi       965Mi       7.0Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
475M	.
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
    

Angular CLI: 12.0.2
Node: 14.17.0
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.0.2
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.2
@angular-devkit/build-angular   12.0.2
@angular-devkit/core            12.0.2
@angular-devkit/schematics      12.0.2
@schematics/angular             12.0.2
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.24s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.80s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.d330fb414e82a53650af.js      | main          | 764.53 kB
styles.9ad38513029a5cce9500.css   | styles        |  74.14 kB
polyfills.53ff9e744cd6b6fdfd91.js | polyfills     |  36.64 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 876.72 kB

Build at: 2021-06-04T23:47:08.256Z - Hash: d1ed8b1464d15f667441 - Time: 95997ms
Done in 102.16s.
```
```bash
yarn run v1.22.10
$ ng test
04 06 2021 17:47:24.949:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
04 06 2021 17:47:24.952:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 06 2021 17:47:24.956:INFO [launcher]: Starting browser Firefox
04 06 2021 17:47:32.891:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket 4Qy12yqDegIsbz8bAAAB with id 60907265
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.071 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.071 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.221 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.221 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.235 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.306 secs / 0.235 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 24.92s.
```
