Tue Jan 25 12:54:02 PM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.3Gi       3.6Gi       1.0Mi       1.8Gi       5.1Gi
Swap:          7.6Gi          0B       7.6Gi
System Storage
699M	.
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
    

Angular CLI: 13.1.4
Node: 16.13.2
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.1.3
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1301.4
@angular-devkit/build-angular   13.1.4
@angular-devkit/core            13.1.4
@angular-devkit/schematics      13.1.4
@angular/cli                    13.1.4
@schematics/angular             13.1.4
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 2.53s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.29s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.5f7dbf7662ea665c.js      | main          | 787.02 kB |               146.79 kB
styles.937a40dacd3ed3bc.css   | styles        |  72.61 kB |                 7.53 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.11db3c0c723a5cbd.js   | runtime       |   1.45 kB |               776 bytes

| Initial Total | 898.04 kB |               166.84 kB

Build at: 2022-01-25T19:55:03.695Z - Hash: d99e5ceb2987ee93 - Time: 17590ms
Done in 24.73s.
```
```bash
yarn run v1.22.17
$ ng test
25 01 2022 12:55:10.322:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
25 01 2022 12:55:10.326:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 01 2022 12:55:10.341:INFO [launcher]: Starting browser Firefox
25 01 2022 12:55:29.656:INFO [Firefox 95.0 (Fedora 0.0.0)]: Connected on socket lIIYa_F6jem6FvhSAAAB with id 9105536
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.045 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.045 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.083 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.083 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.327 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.42 secs / 0.327 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 26.48s.
```
Tue Jan 25 12:55:31 PM MST 2022
