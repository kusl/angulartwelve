Fri Feb 18 05:35:18 AM MST 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.3Gi       3.1Gi       3.0Mi       3.3Gi       6.1Gi
Swap:          7.6Gi       1.0Mi       7.6Gi
System Storage
819M	.
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
    

Angular CLI: 13.2.4
Node: 16.14.0
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.2.3
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.4
@angular-devkit/build-angular   13.2.4
@angular-devkit/core            13.2.4
@angular-devkit/schematics      13.2.4
@angular/cli                    13.2.4
@schematics/angular             13.2.4
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.16s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.74e6e2a92403df0d.js      | main          | 779.44 kB |               144.75 kB
styles.937a40dacd3ed3bc.css   | styles        |  72.61 kB |                 7.53 kB
polyfills.5e092d936b995562.js | polyfills     |  36.96 kB |                11.77 kB
runtime.a5b9d5af3a88a4e7.js   | runtime       |   1.45 kB |               788 bytes

| Initial Total | 890.45 kB |               164.82 kB

Build at: 2022-02-18T12:35:55.045Z - Hash: 73ac587b2ad56e9b - Time: 12538ms
Done in 15.94s.
```
```bash
yarn run v1.22.17
$ ng test
18 02 2022 05:36:03.992:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
18 02 2022 05:36:04.006:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 02 2022 05:36:04.018:INFO [launcher]: Starting browser Firefox
18 02 2022 05:36:06.281:INFO [Firefox 97.0 (Fedora 0.0.0)]: Connected on socket 8Tb4Hs5R0YsvLNYsAAAB with id 45565102
Firefox 97.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 97.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.054 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 97.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.054 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.307 secs)
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.344 secs)
[1A[2KFirefox 97.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.439 secs / 0.344 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 11.74s.
```
Fri Feb 18 05:36:07 AM MST 2022
