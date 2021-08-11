Tue Aug 10 08:36:36 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.3Gi       2.8Gi       1.0Mi       3.6Gi       6.1Gi
Swap:          7.6Gi        40Mi       7.6Gi
System Storage
574M	.
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
    

Angular CLI: 12.1.3
Node: 14.17.4
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.1.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1201.3
@angular-devkit/build-angular   12.1.3
@angular-devkit/core            12.1.3
@angular-devkit/schematics      12.1.3
@schematics/angular             12.1.3
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.04s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.84s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.a38be260e94b7ffb40a4.js      | main          | 781.90 kB
styles.dd8a12ad2fe6c3153c56.css   | styles        |  71.40 kB
polyfills.f272ba295a668ed8a597.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.67 kB

Build at: 2021-08-11T02:39:35.353Z - Hash: 0c95ace19ae66940478f - Time: 71607ms
Done in 78.13s.
```
```bash
yarn run v1.22.11
$ ng test
10 08 2021 20:39:53.231:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
10 08 2021 20:39:53.233:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 08 2021 20:39:53.242:INFO [launcher]: Starting browser Firefox
10 08 2021 20:40:00.594:INFO [Firefox 90.0 (Fedora 0.0.0)]: Connected on socket uMTptWWX1xi9Co7oAAAB with id 71896559
Firefox 90.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.073 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.073 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.223 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 90.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.223 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.238 secs)
[1A[2KFirefox 90.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.289 secs / 0.238 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 25.60s.
```
Tue Aug 10 08:40:01 PM MDT 2021
