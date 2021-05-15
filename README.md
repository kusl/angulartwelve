Sat May 15 09:49:50 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       794Mi       6.2Gi       1.0Mi       722Mi       6.6Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
355M	.
```
```bash

changed 235 packages, and audited 235 packages in 12s

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
yarn run v1.22.10
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.0.0
Node: 15.3.0
Package Manager: yarn 1.22.10
OS: linux x64

Angular: 12.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.0
@angular-devkit/build-angular   12.0.0
@angular-devkit/core            12.0.0
@angular-devkit/schematics      12.0.0
@schematics/angular             12.0.0
rxjs                            6.6.7
typescript                      4.2.4
    
Done in 1.26s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.6522a1bdaaa2f8d20004.js      | main          | 292.90 kB
styles.ec85c89c6834e629bb3f.css   | styles        |  73.89 kB
polyfills.405a01d84840a1e5b047.js | polyfills     |  36.58 kB
runtime.a880903871f111d641d2.js   | runtime       | 859 bytes

| Initial Total | 404.21 kB

Build at: 2021-05-15T15:50:55.006Z - Hash: 21bc5a31b94e45427386 - Time: 36179ms
Done in 41.09s.
```
```bash
yarn run v1.22.10
$ ng test
15 05 2021 09:51:03.933:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
15 05 2021 09:51:03.937:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 05 2021 09:51:03.941:INFO [launcher]: Starting browser Firefox
15 05 2021 09:51:15.341:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket 3rOTrr3ZBWg3XJDpAAAB with id 38873581
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.213 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.238 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.266 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.327 secs / 0.266 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.74s.
```
