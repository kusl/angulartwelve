Thu Nov  3 10:27:10 PM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.4Gi       1.4Gi       3.0Mi       3.9Gi       5.0Gi
Swap:          7.7Gi        20Mi       7.6Gi
System Storage
1005M	.
```
```bash
yarn run v1.22.19
$ ng --version
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.80s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
```bash
yarn run v1.22.19
$ ng test
03 11 2022 22:29:32.561:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
03 11 2022 22:29:32.564:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 11 2022 22:29:32.569:INFO [launcher]: Starting browser Firefox
03 11 2022 22:29:35.660:INFO [Firefox 106.0 (Linux x86_64)]: Connected on socket gEw1W2YXawhj5GSMAAAB with id 58607980
Firefox 106.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 106.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.088 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 106.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.088 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 106.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.406 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 106.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.406 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 106.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.429 secs)
[1A[2KFirefox 106.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.367 secs / 0.429 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 31.39s.
```
