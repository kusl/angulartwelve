Sat May 15 12:40:59 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.5Gi       3.4Gi       8.0Mi       1.8Gi       4.8Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
368M	.
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
    
Done in 0.96s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.752d0b43226281852fea.js      | main          | 397.66 kB
styles.ec85c89c6834e629bb3f.css   | styles        |  73.89 kB
polyfills.405a01d84840a1e5b047.js | polyfills     |  36.58 kB
runtime.a880903871f111d641d2.js   | runtime       | 859 bytes

| Initial Total | 508.97 kB

Build at: 2021-05-15T18:42:18.652Z - Hash: c062eb2cbac3f1d339bc - Time: 51734ms
Done in 55.48s.
```
```bash
yarn run v1.22.10
$ ng test
15 05 2021 12:42:27.290:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
15 05 2021 12:42:27.292:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 05 2021 12:42:27.296:INFO [launcher]: Starting browser Firefox
15 05 2021 12:42:38.619:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket acUFRjvMGJmzIYLBAAAB with id 95884973
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.1 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.122 secs)
[1A[2KERROR: [36m'NG0304: 'app-navigation-bar' is not a known element:
1. If 'app-navigation-bar' is an Angular component, then verify that it is part of this module.
2. If 'app-navigation-bar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.122 secs)
ERROR: 'NG0304: 'app-navigation-bar' is not a known element:
1. If 'app-navigation-bar' is an Angular component, then verify that it is part of this module.
2. If 'app-navigation-bar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.15 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.18 secs / 0.15 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.17s.
```
Sat May 15 12:42:39 PM MDT 2021
Sat May 15 12:42:59 PM MDT 2021
