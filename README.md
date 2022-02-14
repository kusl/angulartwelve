Mon Feb 14 12:47:48 PM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.3Gi       3.5Gi       3.0Mi       2.8Gi       6.1Gi
Swap:          7.6Gi       8.0Mi       7.6Gi
System Storage
761M	.
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
    

Angular CLI: 13.2.3
Node: 16.14.0
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.2.2
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.3
@angular-devkit/build-angular   13.2.3
@angular-devkit/core            13.2.3
@angular-devkit/schematics      13.2.3
@angular/cli                    13.2.3
@schematics/angular             13.2.3
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.39s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.032745fada82e644.js      | main          | 780.88 kB |               145.38 kB
styles.937a40dacd3ed3bc.css   | styles        |  72.61 kB |                 7.53 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 891.89 kB |               165.45 kB

Build at: 2022-02-14T19:48:25.304Z - Hash: 929a4478cf014474 - Time: 12005ms
Done in 16.04s.
```
```bash
yarn run v1.22.17
$ ng test
14 02 2022 12:48:37.756:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
14 02 2022 12:48:37.759:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 02 2022 12:48:37.765:INFO [launcher]: Starting browser Firefox
14 02 2022 12:48:40.074:INFO [Firefox 96.0 (Fedora 0.0.0)]: Connected on socket ddGpfq3DsZqmn8QVAAAB with id 50602706
Firefox 96.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.052 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 96.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.052 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.111 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 96.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.111 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.373 secs)
[1A[2KFirefox 96.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.437 secs / 0.373 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 15.63s.
```
