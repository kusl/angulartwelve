Fri Oct 28 04:41:39 AM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.8Gi       814Mi       3.0Mi       4.0Gi       4.5Gi
Swap:          7.7Gi       4.0Mi       7.7Gi
System Storage
1004M	.
```
```bash
yarn run v1.22.19
$ ng --version
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.81s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
```bash
yarn run v1.22.19
$ ng test
28 10 2022 04:42:39.946:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
28 10 2022 04:42:39.949:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 10 2022 04:42:39.953:INFO [launcher]: Starting browser Firefox
28 10 2022 04:43:08.561:INFO [Firefox 106.0 (Linux x86_64)]: Connected on socket wYv_RowfZn0h_l6SAAAB with id 18060122
Firefox 106.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 106.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.036 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 106.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.036 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 106.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.067 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 106.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.067 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 106.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.23 secs)
[1A[2KFirefox 106.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.294 secs / 0.23 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 40.27s.
```
