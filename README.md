Sat May 15 10:02:29 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.1Gi       4.9Gi        10Mi       1.6Gi       6.2Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
356M	.
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
    

Angular CLI: 12.0.0
Node: 14.17.0
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
    
Done in 0.96s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.79s.
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

Build at: 2021-05-15T16:03:24.057Z - Hash: 21bc5a31b94e45427386 - Time: 34093ms
Done in 37.86s.
```
```bash
yarn run v1.22.10
$ ng test
15 05 2021 10:03:32.928:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
15 05 2021 10:03:32.930:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 05 2021 10:03:32.933:INFO [launcher]: Starting browser Firefox
15 05 2021 10:03:43.875:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket H6tQ-WPqo3Hc46S_AAAB with id 9808639
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.198 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.238 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.264 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.321 secs / 0.264 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.16s.
```
Sat May 15 10:03:44 AM MDT 2021
