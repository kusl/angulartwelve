Wed Aug 17 09:21:17 AM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.2Gi       2.0Gi       3.0Mi       3.5Gi       5.1Gi
Swap:          7.7Gi       0.0Ki       7.7Gi
System Storage
812M	.
```
```bash
yarn run v1.22.19
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.3.0
Node: 16.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 13.3.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.0
@angular-devkit/build-angular   13.3.0
@angular-devkit/core            13.3.0
@angular-devkit/schematics      13.3.0
@schematics/angular             13.3.0
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.18s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.76s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.31f409b18e816da4.js      | main          | 768.04 kB |               142.54 kB
styles.b198622d493ac621.css   | styles        |  72.81 kB |                 7.55 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 879.25 kB |               162.62 kB

Build at: 2022-08-17T15:23:31.777Z - Hash: d6ff3f64bcb1d26c - Time: 20067ms
Done in 23.55s.
```
```bash
yarn run v1.22.19
$ ng test
17 08 2022 09:23:40.922:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
17 08 2022 09:23:40.926:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 08 2022 09:23:40.931:INFO [launcher]: Starting browser Firefox
17 08 2022 09:23:43.051:INFO [Firefox 103.0 (Linux x86_64)]: Connected on socket RtwnNp5Q0HrdyO-LAAAB with id 86000042
Firefox 103.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 103.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 103.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.036 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 103.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.036 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 103.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.314 secs)
[1A[2KFirefox 103.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.343 secs)
[1A[2KFirefox 103.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.387 secs / 0.343 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 11.88s.
```
Wed Aug 17 09:23:44 AM MDT 2022
