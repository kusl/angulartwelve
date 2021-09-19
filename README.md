Sun Sep 19 02:21:03 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       811Mi       4.9Gi       8.0Mi       1.9Gi       6.5Gi
Swap:          7.6Gi       540Mi       7.1Gi
System Storage
636M	.
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
    

Angular CLI: 12.2.6
Node: 14.17.6
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.6
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.6
@angular-devkit/build-angular   12.2.6
@angular-devkit/core            12.2.6
@angular-devkit/schematics      12.2.6
@schematics/angular             12.2.6
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.16s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.86s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.307f96d7435f9d69b8f6.js      | main          | 781.86 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.a1a3f04766a4ed11fdc2.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.74 kB

Build at: 2021-09-19T20:36:41.446Z - Hash: edbc4df5cc31a24b91d0 - Time: 33855ms
Done in 39.05s.
```
```bash
yarn run v1.22.11
$ ng test
19 09 2021 14:36:50.924:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
19 09 2021 14:36:50.927:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 09 2021 14:36:50.930:INFO [launcher]: Starting browser Firefox
19 09 2021 14:36:58.845:INFO [Firefox 92.0 (Fedora 0.0.0)]: Connected on socket mvfFzEgAA5-gW0U3AAAB with id 19193977
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.089 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.089 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.128 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.128 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.258 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.308 secs / 0.258 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.05s.
```
Sun Sep 19 02:37:00 PM MDT 2021
