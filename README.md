Sat May 29 08:58:59 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       936Mi       5.4Gi       7.0Mi       1.3Gi       6.4Gi
Swap:          7.7Gi        76Mi       7.6Gi
System Storage
473M	.
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
    
Done in 1.25s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.21d54e7c33cc8a66292a.js      | main          | 764.57 kB
styles.9ad38513029a5cce9500.css   | styles        |  74.14 kB
polyfills.e80af9e7ff9349abcac2.js | polyfills     |  36.64 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 876.76 kB

Build at: 2021-05-30T03:00:54.194Z - Hash: aae283ade4b00a115109 - Time: 84118ms
Done in 90.22s.
```
```bash
yarn run v1.22.10
$ ng test
29 05 2021 21:01:03.580:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
29 05 2021 21:01:03.582:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 05 2021 21:01:03.587:INFO [launcher]: Starting browser Firefox
29 05 2021 21:01:14.906:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket sGHudtWVzOjN_T0OAAAB with id 81305799
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.087 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.111 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.111 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.248 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.303 secs / 0.248 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.99s.
```
Sat May 29 09:01:16 PM MDT 2021
