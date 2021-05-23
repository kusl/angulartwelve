Sun May 23 02:40:20 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       528Mi       5.9Gi       6.0Mi       1.2Gi       6.9Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
411M	.
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
    

Angular CLI: 12.0.1
Node: 14.17.0
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.0.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.1
@angular-devkit/build-angular   12.0.1
@angular-devkit/core            12.0.1
@angular-devkit/schematics      12.0.1
@schematics/angular             12.0.1
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.27s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.80ba060cdfb43ac34645.js      | main          | 764.56 kB
styles.9ad38513029a5cce9500.css   | styles        |  74.14 kB
polyfills.6b170126153b5ef370be.js | polyfills     |  36.64 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 876.75 kB

Build at: 2021-05-23T20:42:20.204Z - Hash: 3f8f8b355da34ccfb134 - Time: 84194ms
Done in 90.21s.
```
```bash
yarn run v1.22.10
$ ng test
23 05 2021 14:42:28.864:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
23 05 2021 14:42:28.867:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 05 2021 14:42:28.871:INFO [launcher]: Starting browser Firefox
23 05 2021 14:42:40.343:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket aJ8_azqRZRWLXrbWAAAB with id 21107697
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.207 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.23 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.23 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.241 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.299 secs / 0.241 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.44s.
```
Sun May 23 02:42:41 PM MDT 2021
Sun May 23 02:43:03 PM MDT 2021
