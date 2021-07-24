Sat Jul 24 02:01:22 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       697Mi       5.3Gi       8.0Mi       1.7Gi       6.7Gi
Swap:          7.6Gi        29Mi       7.6Gi
System Storage
573M	.
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
    

Angular CLI: 12.1.3
Node: 14.17.3
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.1.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1201.3
@angular-devkit/build-angular   12.1.3
@angular-devkit/core            12.1.3
@angular-devkit/schematics      12.1.3
@schematics/angular             12.1.3
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.00s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
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

Build at: 2021-07-24T20:02:44.461Z - Hash: 3db2fef45a0eb68b861c - Time: 50637ms
Done in 55.66s.
```
```bash
yarn run v1.22.10
$ ng test
24 07 2021 14:02:53.149:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
24 07 2021 14:02:53.152:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 07 2021 14:02:53.155:INFO [launcher]: Starting browser Firefox
24 07 2021 14:03:00.910:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket 5biTbTAKwjJbRIB2AAAB with id 62608721
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.078 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.078 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.293 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.293 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.307 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.374 secs / 0.307 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.85s.
```
