Thu Sep  8 04:57:59 AM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.2Gi       1.6Gi       3.0Mi       3.8Gi       5.1Gi
Swap:          7.7Gi        13Mi       7.6Gi
System Storage
968M	.
```
```bash
yarn run v1.22.19
$ ng --version
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
```bash
yarn run v1.22.19
$ ng test
08 09 2022 04:59:03.210:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
08 09 2022 04:59:03.214:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 09 2022 04:59:03.219:INFO [launcher]: Starting browser Firefox
08 09 2022 04:59:05.906:INFO [Firefox 104.0 (Linux x86_64)]: Connected on socket zdE_RpMrN0cjl7q6AAAB with id 46416254
Firefox 104.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.046 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.046 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.295 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.295 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.32 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.415 secs / 0.32 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 15.02s.
```
