Wed Oct  6 04:34:14 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       729Mi       4.9Gi       8.0Mi       2.1Gi       6.6Gi
Swap:          7.6Gi       244Mi       7.4Gi
System Storage
662M	.
```
```bash
yarn run v1.22.15
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.8
Node: 14.18.0
Package Manager: yarn 1.22.15
OS: linux x64

Angular: 12.2.8
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.8
@angular-devkit/build-angular   12.2.8
@angular-devkit/core            12.2.8
@angular-devkit/schematics      12.2.8
@angular/cdk                    12.2.9
@angular/material               12.2.9
@schematics/angular             12.2.8
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.41s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.87s.
```
```bash
yarn run v1.22.15
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.267fccabf92eb87e39bd.js      | main          | 781.88 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.91e5d053a31cf9734c31.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.75 kB

Build at: 2021-10-06T22:35:43.366Z - Hash: 852c2fe904922f6d1d7f - Time: 36041ms
Done in 43.35s.
```
```bash
yarn run v1.22.15
$ ng test
06 10 2021 16:35:53.208:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
06 10 2021 16:35:53.210:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 10 2021 16:35:53.215:INFO [launcher]: Starting browser Firefox
06 10 2021 16:36:00.544:INFO [Firefox 92.0 (Fedora 0.0.0)]: Connected on socket zicMEOS6jGkb3qS8AAAB with id 16685084
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.077 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.077 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.246 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.278 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.322 secs / 0.278 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.55s.
```
Wed Oct  6 04:36:01 PM MDT 2021
