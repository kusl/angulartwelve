Thu Feb  3 06:54:37 AM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.1Gi       4.4Gi       1.0Mi       1.2Gi       5.3Gi
Swap:          7.6Gi          0B       7.6Gi
System Storage
757M	.
```
```bash
yarn run v1.22.17
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.2.1
Node: 16.13.2
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.2.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.1
@angular-devkit/build-angular   13.2.1
@angular-devkit/core            13.2.1
@angular-devkit/schematics      13.2.1
@angular/cli                    13.2.1
@schematics/angular             13.2.1
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 2.71s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.63s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.3edbb88376376f32.js      | main          | 780.88 kB |               145.41 kB
styles.937a40dacd3ed3bc.css   | styles        |  72.61 kB |                 7.53 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 891.89 kB |               165.48 kB

Build at: 2022-02-03T13:58:10.803Z - Hash: 89aef13be3c6af04 - Time: 91236ms
Done in 99.36s.
```
```bash
yarn run v1.22.17
$ ng test
03 02 2022 06:58:18.216:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
03 02 2022 06:58:18.221:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 02 2022 06:58:18.242:INFO [launcher]: Starting browser Firefox
03 02 2022 06:58:48.584:INFO [Firefox 96.0 (Fedora 0.0.0)]: Connected on socket 11KA_DMWMdHbdFrlAAAB with id 11723695
Firefox 96.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 96.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.503 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 96.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.503 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.541 secs)
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.651 secs / 0.541 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 39.01s.
```
