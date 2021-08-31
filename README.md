Tue Aug 31 10:57:08 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       734Mi       5.3Gi        10Mi       1.6Gi       6.6Gi
Swap:          7.6Gi       334Mi       7.3Gi
System Storage
644M	.
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
    

Angular CLI: 12.2.3
Node: 14.17.6
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.3
@angular-devkit/build-angular   12.2.3
@angular-devkit/core            12.2.3
@angular-devkit/schematics      12.2.3
@schematics/angular             12.2.3
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
main.b96b122c157072fd910b.js      | main          | 781.86 kB
styles.e26b0338ea5484bb400d.css   | styles        |  71.52 kB
polyfills.601dcb86877a2669c441.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.75 kB

Build at: 2021-08-31T16:58:25.180Z - Hash: d79f19426d1f21971e60 - Time: 35661ms
Done in 42.05s.
```
```bash
yarn run v1.22.11
$ ng test
31 08 2021 10:58:35.014:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
31 08 2021 10:58:35.017:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
31 08 2021 10:58:35.022:INFO [launcher]: Starting browser Firefox
31 08 2021 10:58:42.230:INFO [Firefox 91.0 (Fedora 0.0.0)]: Connected on socket 5qFSTAzG3FD70gznAAAB with id 42561227
Firefox 91.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.089 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 91.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.089 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.253 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.284 secs)
[1A[2KFirefox 91.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.338 secs / 0.284 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.51s.
```
Tue Aug 31 10:58:43 AM MDT 2021
