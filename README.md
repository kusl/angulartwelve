Thu Jun 10 09:43:38 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.4Gi       5.0Gi       8.0Mi       1.3Gi       6.0Gi
Swap:          7.7Gi        97Mi       7.6Gi
System Storage
476M	.
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
    
Done in 1.26s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.81s.
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

Build at: 2021-06-11T04:12:46.276Z - Hash: d1ed8b1464d15f667441 - Time: 72164ms
Done in 78.44s.
```
```bash
yarn run v1.22.10
$ ng test
10 06 2021 22:12:56.122:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
10 06 2021 22:12:56.125:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 06 2021 22:12:56.128:INFO [launcher]: Starting browser Firefox
10 06 2021 22:13:04.488:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket YKuOOr_yuTsuvzCIAAAB with id 31237516
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.208 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.208 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.221 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.241 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.304 secs / 0.241 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.78s.
```
