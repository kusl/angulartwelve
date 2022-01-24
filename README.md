Sun Jan 23 05:01:58 PM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.0Gi       5.1Gi       1.0Mi       1.6Gi       6.4Gi
Swap:          7.6Gi          0B       7.6Gi
System Storage
696M	.
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
    

Angular CLI: 13.1.3
Node: 16.13.2
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.1.2
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1301.3
@angular-devkit/build-angular   13.1.3
@angular-devkit/core            13.1.3
@angular-devkit/schematics      13.1.3
@angular/cli                    13.1.3
@schematics/angular             13.1.3
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 2.60s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.26s.
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

Build at: 2022-01-24T00:36:49.954Z - Hash: d99e5ceb2987ee93 - Time: 45672ms
Done in 51.56s.
```
```bash
yarn run v1.22.17
$ ng test
23 01 2022 17:36:53.659:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
23 01 2022 17:36:53.662:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 01 2022 17:36:53.667:INFO [launcher]: Starting browser Firefox
23 01 2022 17:37:08.171:INFO [Firefox 95.0 (Fedora 0.0.0)]: Connected on socket JCD69cGotbv5zARyAAAB with id 3171593
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.195 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.195 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.212 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.283 secs / 0.233 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 18.59s.
```
