Sat Jun 26 06:21:13 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       416Mi       6.3Gi       1.0Mi       956Mi       7.0Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
569M	.
```
```bash
yarn run v1.22.10
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.1.0
Node: 14.17.1
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.1.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1201.0
@angular-devkit/build-angular   12.1.0
@angular-devkit/core            12.1.0
@angular-devkit/schematics      12.1.0
@schematics/angular             12.1.0
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.26s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.86s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.7ee80734d0d4031a9db7.js      | main          | 779.64 kB
styles.7a282889f194343b08e8.css   | styles        |  74.14 kB
polyfills.52e14dfb942f39c699d0.js | polyfills     |  36.66 kB
runtime.3313c5207fe2b69600a5.js   | runtime       |   1.41 kB

| Initial Total | 891.86 kB

Build at: 2021-06-26T12:22:45.542Z - Hash: 6ebb5526dbd10f382a13 - Time: 50562ms
Done in 55.56s.
```
```bash
yarn run v1.22.10
$ ng test
26 06 2021 06:22:54.419:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
26 06 2021 06:22:54.422:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 06 2021 06:22:54.426:INFO [launcher]: Starting browser Firefox
26 06 2021 06:23:02.467:INFO [Firefox 89.0 (Fedora 0.0.0)]: Connected on socket KElsyhKtgyak_iBiAAAB with id 39132000
Firefox 89.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 89.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.212 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 89.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.212 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.226 secs)
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.246 secs)
[1A[2KFirefox 89.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.294 secs / 0.246 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 17.21s.
```
Sat Jun 26 06:23:03 AM MDT 2021
