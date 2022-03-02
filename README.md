Wed Mar  2 10:09:46 AM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.1Gi       3.1Gi       3.0Mi       3.4Gi       6.3Gi
Swap:          7.6Gi       0.0Ki       7.6Gi
System Storage
823M	.
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
    

Angular CLI: 13.2.5
Node: 16.14.0
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.2.4
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.5
@angular-devkit/build-angular   13.2.5
@angular-devkit/core            13.2.5
@angular-devkit/schematics      13.2.5
@angular/cli                    13.2.5
@schematics/angular             13.2.5
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.17s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.81s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.df0a4b3ad5b41a86.js      | main          | 768.68 kB |               142.69 kB
styles.e12cd61a5b6ecc6c.css   | styles        |  72.73 kB |                 7.53 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 879.81 kB |               162.77 kB

Build at: 2022-03-02T17:10:21.922Z - Hash: a13beb919fc39b10 - Time: 11214ms
Done in 16.35s.
```
```bash
yarn run v1.22.17
$ ng test
02 03 2022 10:10:30.569:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
02 03 2022 10:10:30.587:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 03 2022 10:10:30.592:INFO [launcher]: Starting browser Firefox
02 03 2022 10:10:32.854:INFO [Firefox 97.0 (Fedora 0.0.0)]: Connected on socket DjT4DWwWBDrNrKCGAAAB with id 76173091
Firefox 97.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 97.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.077 secs)
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.102 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 97.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.102 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.267 secs)
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.283 secs / 0.267 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 11.43s.
```
Wed Mar  2 10:10:34 AM MST 2022
