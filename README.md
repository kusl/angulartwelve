Mon Oct  4 09:50:46 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       886Mi       4.3Gi       8.0Mi       2.5Gi       6.5Gi
Swap:          7.6Gi        11Mi       7.6Gi
System Storage
656M	.
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
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.8
@angular-devkit/build-angular   12.2.8
@angular-devkit/core            12.2.8
@angular-devkit/schematics      12.2.8
@schematics/angular             12.2.8
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.16s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.87s.
```
```bash
yarn run v1.22.15
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.7eedfedc4918fff69c02.js      | main          | 781.79 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.91e5d053a31cf9734c31.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.66 kB

Build at: 2021-10-05T03:52:29.583Z - Hash: bd043e1484d3e3d92dc9 - Time: 36607ms
Done in 41.99s.
```
```bash
yarn run v1.22.15
$ ng test
04 10 2021 21:52:39.510:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
04 10 2021 21:52:39.513:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 10 2021 21:52:39.517:INFO [launcher]: Starting browser Firefox
04 10 2021 21:52:45.608:INFO [Firefox 92.0 (Fedora 0.0.0)]: Connected on socket 8BtGP08K8qiNS1PhAAAB with id 11967132
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.089 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.116 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 92.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.116 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.279 secs)
[1A[2KFirefox 92.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.323 secs / 0.279 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.39s.
```
