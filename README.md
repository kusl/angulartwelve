Wed Jun  9 04:28:56 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.1Gi       4.7Gi       8.0Mi       1.9Gi       6.3Gi
Swap:          7.7Gi       0.0Ki       7.7Gi
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
    

Angular CLI: 12.0.3
Node: 14.17.0
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.0.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.3
@angular-devkit/build-angular   12.0.3
@angular-devkit/core            12.0.3
@angular-devkit/schematics      12.0.3
@schematics/angular             12.0.3
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.06s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.85s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.d330fb414e82a53650af.js      | main          | 764.53 kB
styles.9ad38513029a5cce9500.css   | styles        |  74.14 kB
polyfills.53ff9e744cd6b6fdfd91.js | polyfills     |  36.64 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 876.72 kB

Build at: 2021-06-09T22:44:43.289Z - Hash: d1ed8b1464d15f667441 - Time: 70105ms
Done in 75.24s.
```
```bash
yarn run v1.22.10
$ ng test
09 06 2021 16:44:52.909:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
09 06 2021 16:44:52.911:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 06 2021 16:44:52.916:INFO [launcher]: Starting browser Firefox
09 06 2021 16:45:00.916:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket qMqunc9OmuYJqG_DAAAB with id 75973385
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.217 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.24 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.24 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.251 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.316 secs / 0.251 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.28s.
```
Wed Jun  9 04:45:02 PM MDT 2021
