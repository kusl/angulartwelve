Fri Dec 17 05:44:51 PM MST 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.2Gi       2.9Gi       3.0Mi       3.6Gi       6.2Gi
Swap:          7.6Gi        12Mi       7.6Gi
System Storage
1.1G	.
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
    

Angular CLI: 13.1.2
Node: 16.13.1
Package Manager: yarn 1.22.17
OS: linux x64

Angular: 13.1.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1301.2
@angular-devkit/build-angular   13.1.2
@angular-devkit/core            13.1.2
@angular-devkit/schematics      13.1.2
@angular/cli                    13.1.2
@schematics/angular             13.1.2
rxjs                            6.6.7
typescript                      4.4.4
    
Done in 1.56s.
yarn install v1.22.17
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.78s.
```
```bash
yarn run v1.22.17
$ ng build --configuration production

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.08b1db4c2e98172c.js      | main          | 784.97 kB |               145.51 kB
styles.557224d21664840f.css   | styles        |  72.26 kB |                 7.51 kB
polyfills.e6156ede071a29fd.js | polyfills     |  36.93 kB |                11.78 kB
runtime.002dc9a692b8c2a2.js   | runtime       |   1.45 kB |               786 bytes

| Initial Total | 895.62 kB |               165.57 kB

Build at: 2021-12-18T00:45:28.440Z - Hash: b52515d9ae84771a - Time: 12260ms
Done in 16.07s.
```
```bash
yarn run v1.22.17
$ ng test
17 12 2021 17:45:32.226:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
17 12 2021 17:45:32.229:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 12 2021 17:45:32.235:INFO [launcher]: Starting browser Firefox
17 12 2021 17:45:45.076:INFO [Firefox 95.0 (Fedora 0.0.0)]: Connected on socket oimXd4stCLPfKQj0AAAB with id 75858084
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.194 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.22 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 95.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.22 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
[1A[2KFirefox 95.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.27 secs / 0.233 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 16.90s.
```
Fri Dec 17 05:45:46 PM MST 2021
