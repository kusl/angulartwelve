Sat May 15 09:18:29 AM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       4.2Gi       1.6Gi       7.0Mi       1.8Gi       3.1Gi
Swap:          7.7Gi        15Mi       7.6Gi
System Storage
355M	.
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

Build at: 2021-05-15T15:19:09.276Z - Hash: 21bc5a31b94e45427386 - Time: 33454ms
Done in 37.26s.
```
```bash
yarn run v1.22.10
$ ng test
15 05 2021 09:19:18.026:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
15 05 2021 09:19:18.029:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 05 2021 09:19:18.033:INFO [launcher]: Starting browser Firefox
15 05 2021 09:19:29.139:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket 0TI2-cbA2UcHuSqyAAAB with id 6298769
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.204 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.233 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.255 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[32m SUCCESS[39m (0.309 secs / 0.255 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 20.26s.
```
