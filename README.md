Mon May 17 08:54:59 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       902Mi       4.1Gi       9.0Mi       2.7Gi       6.5Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
403M	.
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

Angular: 12.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.0
@angular-devkit/build-angular   12.0.0
@angular-devkit/core            12.0.0
@angular-devkit/schematics      12.0.0
@schematics/angular             12.0.0
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 0.97s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.79s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.5681bae6e37f508923ea.js      | main          | 551.37 kB
styles.92908ca9efaf73abe875.css   | styles        |  73.95 kB
polyfills.6e89e2a67442b4c725b0.js | polyfills     |  36.64 kB
runtime.3de57b8d40632216d729.js   | runtime       |   1.41 kB

| Initial Total | 663.37 kB

Build at: 2021-05-17T14:56:42.659Z - Hash: c92c12f15fd9c0bd6157 - Time: 81439ms
Done in 85.25s.
```
```bash
yarn run v1.22.10
$ ng test
17 05 2021 08:56:51.394:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
17 05 2021 08:56:51.397:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 05 2021 08:56:51.400:INFO [launcher]: Starting browser Firefox
17 05 2021 08:57:02.355:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket QYXXEHgdK45QxdfzAAAB with id 94392817
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.094 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.115 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.115 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.125 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.158 secs / 0.125 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 19.84s.
```
Mon May 17 08:57:03 AM MDT 2021
Mon May 17 08:57:25 AM MDT 2021
