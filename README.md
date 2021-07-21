Wed Jul 21 05:46:23 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       415Mi       6.3Gi       1.0Mi       955Mi       7.0Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
572M	.
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
    

Angular CLI: 12.1.2
Node: 14.17.3
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.1.2
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1201.2
@angular-devkit/build-angular   12.1.2
@angular-devkit/core            12.1.2
@angular-devkit/schematics      12.1.2
@schematics/angular             12.1.2
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.28s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.ac4120c33f1bb970309f.js      | main          | 779.94 kB
styles.07716ab0b285c09c4037.css   | styles        |  74.14 kB
polyfills.aaedd03b09a2a0ab58cc.js | polyfills     |  36.66 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 892.16 kB

Build at: 2021-07-21T11:47:57.264Z - Hash: ba786b02439477a20c3e - Time: 50490ms
Done in 55.51s.
```
```bash
yarn run v1.22.10
$ ng test
21 07 2021 05:48:06.172:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
21 07 2021 05:48:06.174:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 07 2021 05:48:06.179:INFO [launcher]: Starting browser Firefox
21 07 2021 05:48:14.175:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket 2SyvYe4CuYE5ZZkjAAAB with id 9623416
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.069 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.069 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.229 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.229 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.247 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.313 secs / 0.247 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.22s.
```
Wed Jul 21 05:48:15 AM MDT 2021
