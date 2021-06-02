Wed Jun  2 03:54:49 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       343Mi       6.6Gi       1.0Mi       746Mi       7.1Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
475M	.
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
    
Done in 1.23s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.82s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.804be2e7b8dfd607bac3.js      | main          | 764.53 kB
styles.9ad38513029a5cce9500.css   | styles        |  74.14 kB
polyfills.e80af9e7ff9349abcac2.js | polyfills     |  36.64 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 876.72 kB

Build at: 2021-06-02T09:57:06.824Z - Hash: 879a44d0976b6f4906c3 - Time: 82602ms
Done in 88.81s.
```
```bash
yarn run v1.22.10
$ ng test
02 06 2021 03:57:16.193:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
02 06 2021 03:57:16.196:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 06 2021 03:57:16.200:INFO [launcher]: Starting browser Firefox
02 06 2021 03:57:27.300:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket mmOOARobBBQOQMx4AAAB with id 6769082
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.072 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.072 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.246 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.306 secs / 0.246 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.74s.
```
Wed Jun  2 03:57:28 AM MDT 2021
