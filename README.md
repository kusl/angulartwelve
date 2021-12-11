Fri Dec 10 06:40:47 PM MST 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.1Gi       3.0Gi       3.0Mi       3.5Gi       6.2Gi
Swap:          7.6Gi       1.0Mi       7.6Gi
System Storage
890M	.
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
    

Angular CLI: 13.1.1
Node: 16.13.1
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.1.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1301.1
@angular-devkit/build-angular   13.1.1
@angular-devkit/core            13.1.1
@angular-devkit/schematics      13.1.1
@angular/cli                    13.1.1
@schematics/angular             13.1.1
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.10s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.73s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.5fe41faa093d9ca7.js      | main          | 784.93 kB |               145.64 kB
styles.557224d21664840f.css   | styles        |  72.26 kB |                 7.51 kB
polyfills.6d3365e96b00b51e.js | polyfills     |  36.93 kB |                11.75 kB
runtime.002dc9a692b8c2a2.js   | runtime       |   1.45 kB |               786 bytes

| Initial Total | 895.57 kB |               165.66 kB

Build at: 2021-12-11T01:41:24.603Z - Hash: 27a07e2b3cd5f3cb - Time: 11823ms
Done in 15.32s.
```
```bash
yarn run v1.22.17
$ ng test
10 12 2021 18:41:28.232:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
10 12 2021 18:41:28.236:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 12 2021 18:41:28.240:INFO [launcher]: Starting browser Firefox
10 12 2021 18:41:39.788:INFO [Firefox 94.0 (Fedora 0.0.0)]: Connected on socket I_xoBL8O0G4eUgpqAAAB with id 59573537
Firefox 94.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 94.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.076 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.254 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 94.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.254 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.271 secs)
[1A[2KFirefox 94.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.312 secs / 0.271 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 15.43s.
```
Fri Dec 10 06:41:40 PM MST 2021
