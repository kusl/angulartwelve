Thu Jul 22 08:47:56 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.4Gi       4.1Gi       8.0Mi       2.2Gi       6.0Gi
Swap:          7.7Gi        13Mi       7.6Gi
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
    
Done in 1.24s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.bbac779e18edffa6e6e4.js      | main          | 779.84 kB
styles.c6d48b2891326c6773eb.css   | styles        |  74.15 kB
polyfills.97cc371aae8408df15c6.js | polyfills     |  36.66 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 892.06 kB

Build at: 2021-07-22T14:50:46.489Z - Hash: 3db2fef45a0eb68b861c - Time: 89398ms
Done in 94.43s.
```
```bash
yarn run v1.22.10
$ ng test
22 07 2021 08:51:02.990:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
22 07 2021 08:51:02.993:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 07 2021 08:51:02.997:INFO [launcher]: Starting browser Firefox
22 07 2021 08:51:11.587:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket l8jODH39IlvXtphMAAAB with id 24480824
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.073 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.073 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.234 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.234 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.246 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.3 secs / 0.246 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 25.41s.
```
