Fri Mar 11 10:59:55 AM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.6Gi       2.6Gi       3.0Mi       3.5Gi       5.6Gi
Swap:          7.6Gi       6.0Mi       7.6Gi
System Storage
811M	.
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
    

Angular CLI: 13.2.6
Node: 16.14.0
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.2.6
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.6
@angular-devkit/build-angular   13.2.6
@angular-devkit/core            13.2.6
@angular-devkit/schematics      13.2.6
@schematics/angular             13.2.6
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.13s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.73s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.cb6a1113878e7a92.js      | main          | 768.03 kB |               142.50 kB
styles.8e8dcd35b6eddbf4.css   | styles        |  72.77 kB |                 7.56 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 879.20 kB |               162.60 kB

Build at: 2022-03-11T18:00:32.336Z - Hash: b4af9f890f940fab - Time: 11270ms
Done in 14.61s.
```
```bash
yarn run v1.22.17
$ ng test
11 03 2022 11:00:40.982:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
11 03 2022 11:00:40.986:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 03 2022 11:00:40.991:INFO [launcher]: Starting browser Firefox
11 03 2022 11:00:43.234:INFO [Firefox 97.0 (Fedora 0.0.0)]: Connected on socket 0xOBZwPR7ZaSpNv5AAAB with id 82936649
Firefox 97.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 97.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.215 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 97.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.215 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.231 secs)
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.258 secs)
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.262 secs / 0.258 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 11.39s.
```
Fri Mar 11 11:00:44 AM MST 2022
