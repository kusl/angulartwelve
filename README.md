Thu Oct 14 04:18:27 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       783Mi       4.5Gi       9.0Mi       2.4Gi       6.6Gi
Swap:          7.6Gi       343Mi       7.3Gi
System Storage
674M	.
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
    

Angular CLI: 12.2.10
Node: 14.18.1
Package Manager: yarn 1.22.15
OS: linux x64

Angular: 12.2.10
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.10
@angular-devkit/build-angular   12.2.10
@angular-devkit/core            12.2.10
@angular-devkit/schematics      12.2.10
@angular/cdk                    12.2.9
@angular/material               12.2.9
@schematics/angular             12.2.10
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.07s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.85s.
```
```bash
yarn run v1.22.15
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.25e9d326e72e119f2e5f.js      | main          | 781.89 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.ed2a18a1c1f06468aca3.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.76 kB

Build at: 2021-10-14T22:20:08.509Z - Hash: 3fcc5ef59134d44cd351 - Time: 35534ms
Done in 40.70s.
```
```bash
yarn run v1.22.15
$ ng test
14 10 2021 16:20:18.181:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
14 10 2021 16:20:18.184:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 10 2021 16:20:18.187:INFO [launcher]: Starting browser Firefox
14 10 2021 16:20:25.207:INFO [Firefox 93.0 (Fedora 0.0.0)]: Connected on socket 85Li7BvN0Sh3XpNOAAAB with id 53079619
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.069 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.069 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.245 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.245 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.26 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.303 secs / 0.26 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.04s.
```
