Wed Sep 29 07:48:07 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       906Mi       4.6Gi       8.0Mi       2.2Gi       6.5Gi
Swap:          7.6Gi       615Mi       7.0Gi
System Storage
654M	.
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
    

Angular CLI: 12.2.7
Node: 14.18.0
Package Manager: yarn 1.22.11
OS: linux x64

Angular: 12.2.7
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.7
@angular-devkit/build-angular   12.2.7
@angular-devkit/core            12.2.7
@angular-devkit/schematics      12.2.7
@schematics/angular             12.2.7
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.42s.
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.89s.
```
```bash
yarn run v1.22.11
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.7db78a081ee5d01b4fb6.js      | main          | 781.79 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.421baff5367a8977cc50.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.66 kB

Build at: 2021-09-29T13:49:23.612Z - Hash: 120c4c4ea266f9701856 - Time: 36496ms
Done in 43.00s.
```
```bash
yarn run v1.22.11
$ ng test
29 09 2021 07:49:33.555:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
29 09 2021 07:49:33.557:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 09 2021 07:49:33.561:INFO [launcher]: Starting browser Firefox
29 09 2021 07:49:40.811:INFO [Firefox 92.0 (Fedora 0.0.0)]: Connected on socket -de97xoxvnpvq_UYAAAB with id 36670609
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.234 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.234 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.251 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.274 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.319 secs / 0.274 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.61s.
```
