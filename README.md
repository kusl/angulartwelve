Wed Mar 23 01:19:12 PM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       679Mi       6.2Gi       1.0Mi       775Mi       6.8Gi
Swap:          7.6Gi          0B       7.6Gi
System Storage
811M	.
```
```bash
yarn run v1.22.18
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.2.6
Node: 16.14.2
Package Manager: yarn 1.22.18
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
    
Done in 1.49s.
yarn install v1.22.18
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.75s.
```
```bash
yarn run v1.22.18
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.31f409b18e816da4.js      | main          | 768.04 kB |               142.54 kB
styles.b198622d493ac621.css   | styles        |  72.81 kB |                 7.55 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 879.25 kB |               162.62 kB

Build at: 2022-03-23T19:21:24.823Z - Hash: d6ff3f64bcb1d26c - Time: 49324ms
Done in 53.58s.
```
```bash
yarn run v1.22.18
$ ng test
23 03 2022 13:21:41.085:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
23 03 2022 13:21:41.089:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 03 2022 13:21:41.104:INFO [launcher]: Starting browser Firefox
23 03 2022 13:21:45.933:INFO [Firefox 98.0 (Fedora 0.0.0)]: Connected on socket fqZuciXPn3DBerN1AAAB with id 68085718
Firefox 98.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 98.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 98.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.06 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 98.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.06 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 98.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.368 secs)
[1A[2KFirefox 98.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.399 secs)
[1A[2KFirefox 98.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.472 secs / 0.399 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 21.61s.
```
Wed Mar 23 01:21:47 PM MDT 2022
