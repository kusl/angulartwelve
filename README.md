Tue Oct 12 06:11:41 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       708Mi       4.8Gi       8.0Mi       2.2Gi       6.6Gi
Swap:          7.6Gi       296Mi       7.4Gi
System Storage
660M	.
```
```bash
yarn run v1.22.15
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.9
Node: 14.18.0
Package Manager: yarn 1.22.15
OS: linux x64

Angular: 12.2.9
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.9
@angular-devkit/build-angular   12.2.9
@angular-devkit/core            12.2.9
@angular-devkit/schematics      12.2.9
@schematics/angular             12.2.9
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.20s.
yarn install v1.22.15
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
yarn run v1.22.15
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.891eb59969a5271fd556.js      | main          | 781.89 kB
styles.9ba268f08602b4713e08.css   | styles        |  71.51 kB
polyfills.b248f81e96b7538ae2da.js | polyfills     |  36.93 kB
runtime.f936427b719890d6f190.js   | runtime       |   1.43 kB

| Initial Total | 891.76 kB

Build at: 2021-10-12T12:13:13.377Z - Hash: fa3bfdea0dec6b54bb0c - Time: 34930ms
Done in 40.62s.
```
```bash
yarn run v1.22.15
$ ng test
12 10 2021 06:13:22.983:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
12 10 2021 06:13:22.986:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 10 2021 06:13:22.989:INFO [launcher]: Starting browser Firefox
12 10 2021 06:13:29.927:INFO [Firefox 93.0 (Fedora 0.0.0)]: Connected on socket IAX-hbvRImoMMxJCAAAB with id 53056305
Firefox 93.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.085 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.085 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.113 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 93.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.113 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.271 secs)
[1A[2KFirefox 93.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.314 secs / 0.271 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.92s.
```
Tue Oct 12 06:13:31 AM MDT 2021
