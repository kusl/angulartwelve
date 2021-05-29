Sat May 29 04:38:50 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       566Mi       5.5Gi       7.0Mi       1.6Gi       6.8Gi
Swap:          7.7Gi        58Mi       7.6Gi
System Storage
438M	.
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
    
Done in 0.95s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.77s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.9dfcf7158c319aa6be40.js      | main          | 764.56 kB
styles.9ad38513029a5cce9500.css   | styles        |  74.14 kB
polyfills.e80af9e7ff9349abcac2.js | polyfills     |  36.64 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 876.75 kB

Build at: 2021-05-29T22:40:38.926Z - Hash: 5e144b969ed1e7267a76 - Time: 82955ms
Done in 87.32s.
```
```bash
yarn run v1.22.10
$ ng test
29 05 2021 16:40:48.078:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
29 05 2021 16:40:48.081:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 05 2021 16:40:48.084:INFO [launcher]: Starting browser Firefox
29 05 2021 16:40:59.189:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket rfwYGyE17m8qH86iAAAB with id 21599458
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.208 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.231 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.231 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.245 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.308 secs / 0.245 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.54s.
```
