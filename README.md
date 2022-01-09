Sun Jan  9 08:09:01 AM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.2Gi       3.2Gi        11Mi       3.3Gi       6.2Gi
Swap:          7.6Gi       329Mi       7.3Gi
System Storage
1.1G	.
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
    

Angular CLI: 13.1.2
Node: 16.13.1
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.1.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1301.2
@angular-devkit/build-angular   13.1.2
@angular-devkit/core            13.1.2
@angular-devkit/schematics      13.1.2
@angular/cli                    13.1.2
@schematics/angular             13.1.2
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.15s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.71s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.08b1db4c2e98172c.js      | main          | 784.97 kB |               145.51 kB
styles.557224d21664840f.css   | styles        |  72.26 kB |                 7.51 kB
polyfills.e6156ede071a29fd.js | polyfills     |  36.93 kB |                11.78 kB
runtime.002dc9a692b8c2a2.js   | runtime       |   1.45 kB |               786 bytes

| Initial Total | 895.62 kB |               165.57 kB

Build at: 2022-01-09T15:09:38.346Z - Hash: b52515d9ae84771a - Time: 11570ms
Done in 15.15s.
```
```bash
yarn run v1.22.17
$ ng test
09 01 2022 08:09:42.140:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
09 01 2022 08:09:42.143:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 01 2022 08:09:42.146:INFO [launcher]: Starting browser Firefox
09 01 2022 08:09:54.961:INFO [Firefox 95.0 (Fedora 0.0.0)]: Connected on socket nbv3hNoquRgzoZyPAAAB with id 99340641
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.063 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.063 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.22 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.24 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.277 secs / 0.24 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.87s.
```
Sun Jan  9 08:09:55 AM MST 2022
