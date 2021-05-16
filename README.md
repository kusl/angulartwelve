Sun May 16 04:07:32 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.4Gi       4.5Gi       3.0Mi       1.8Gi       6.0Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
365M	.
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
    
Done in 1.09s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.82s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.2244db42e2f60fd4fbd9.js      | main          | 551.19 kB
styles.ec85c89c6834e629bb3f.css   | styles        |  73.89 kB
polyfills.405a01d84840a1e5b047.js | polyfills     |  36.58 kB
runtime.3de57b8d40632216d729.js   | runtime       |   1.35 kB

| Initial Total | 663.01 kB

Build at: 2021-05-16T22:09:16.920Z - Hash: bfc4e4bfad90ac3fd328 - Time: 81853ms
Done in 86.49s.
```
```bash
yarn run v1.22.10
$ ng test
16 05 2021 16:09:33.975:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
16 05 2021 16:09:33.978:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 05 2021 16:09:33.983:INFO [launcher]: Starting browser Firefox
16 05 2021 16:09:45.250:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket 3PT3xZUEr3VWmJiuAAAB with id 93322517
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.08 secs)
[1A[2KERROR: [36m'NG0304: 'app-navigation-bar' is not a known element:
1. If 'app-navigation-bar' is an Angular component, then verify that it is part of this module.
2. If 'app-navigation-bar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.08 secs)
ERROR: 'NG0304: 'app-navigation-bar' is not a known element:
1. If 'app-navigation-bar' is an Angular component, then verify that it is part of this module.
2. If 'app-navigation-bar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.108 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.132 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.162 secs / 0.132 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 28.51s.
```
Sun May 16 04:09:46 PM MDT 2021
Sun May 16 04:10:55 PM MDT 2021
