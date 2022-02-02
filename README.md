Tue Feb  1 11:22:33 PM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.6Gi       1.7Gi       3.0Mi       3.4Gi       4.8Gi
Swap:          7.6Gi       7.0Mi       7.6Gi
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
    

Angular CLI: 13.2.0
Node: 16.13.2
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.2.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.0
@angular-devkit/build-angular   13.2.0
@angular-devkit/core            13.2.0
@angular-devkit/schematics      13.2.0
@schematics/angular             13.2.0
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.41s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.80s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.12a1311ecf647fe0.js      | main          | 787.18 kB |               146.79 kB
styles.937a40dacd3ed3bc.css   | styles        |  72.61 kB |                 7.53 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 898.20 kB |               166.85 kB

Build at: 2022-02-02T06:24:24.661Z - Hash: 704fff6652fbada8 - Time: 52054ms
Done in 56.28s.
```
```bash
yarn run v1.22.17
$ ng test
01 02 2022 23:24:28.653:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
01 02 2022 23:24:28.655:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 02 2022 23:24:28.659:INFO [launcher]: Starting browser Firefox
01 02 2022 23:24:43.798:INFO [Firefox 95.0 (Fedora 0.0.0)]: Connected on socket We7JsGlC59cBy5C5AAAB with id 72204329
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.035 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.035 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.197 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.197 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.217 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.258 secs / 0.217 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 19.32s.
```
Tue Feb  1 11:24:44 PM MST 2022
