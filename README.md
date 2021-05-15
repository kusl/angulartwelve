Sat May 15 09:02:16 AM MDT 2021
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       4.0Gi       1.6Gi        11Mi       2.1Gi       3.4Gi
Swap:          7.7Gi        11Mi       7.6Gi
351M	.
```bash
yarn run v1.22.10
$ ng update @angular/core @angular/cli @angular/material @angular/localize
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
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

Build at: 2021-05-15T15:02:56.274Z - Hash: 21bc5a31b94e45427386 - Time: 33837ms
Done in 37.62s.
```bash
yarn run v1.22.10
$ ng test
15 05 2021 09:03:05.015:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
15 05 2021 09:03:05.017:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 05 2021 09:03:05.021:INFO [launcher]: Starting browser Firefox
15 05 2021 09:03:16.236:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket OODbUsjkWirq26QUAAAB with id 35873200
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.196 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.221 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.252 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.306 secs / 0.252 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.36s.
```
