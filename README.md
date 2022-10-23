Sun Oct 23 03:42:51 PM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.3Gi       1.5Gi       3.0Mi       3.9Gi       5.0Gi
Swap:          7.7Gi        16Mi       7.6Gi
System Storage
1.4G	.
```
```bash
yarn run v1.22.19
$ ng --version
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.77s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
```bash
yarn run v1.22.19
$ ng test
23 10 2022 15:43:39.554:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
23 10 2022 15:43:39.558:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 10 2022 15:43:39.563:INFO [launcher]: Starting browser Firefox
23 10 2022 15:43:41.724:INFO [Firefox 105.0 (Linux x86_64)]: Connected on socket PyGn_6O7QMCi5rlaAAAB with id 31574410
Firefox 105.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 105.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 105.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.043 secs)
[1A[2KFirefox 105.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.065 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 105.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.065 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 105.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.261 secs)
[1A[2KFirefox 105.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.319 secs / 0.261 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 13.62s.
```
