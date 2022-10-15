Sat Oct 15 04:34:24 AM MDT 2022
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.7Gi       2.5Gi       8.0Mi       3.4Gi       5.7Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
965M	.
```
```bash
yarn run v1.22.19
$ ng --version
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.87s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
```bash
yarn run v1.22.19
$ ng test
15 10 2022 04:35:49.674:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
15 10 2022 04:35:49.678:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 10 2022 04:35:49.683:INFO [launcher]: Starting browser Firefox
15 10 2022 04:35:53.300:INFO [Firefox 105.0 (Linux x86_64)]: Connected on socket nLQZ5klyDH2Q9aAsAAAB with id 29685234
Firefox 105.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 105.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.038 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 105.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.038 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 105.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.065 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 105.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.065 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element (used in the 'NavigationBarComponent' component template):
1. If 'mat-icon' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 105.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.279 secs)
[1A[2KFirefox 105.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0.341 secs / 0.279 secs)
[32mTOTAL: 3 SUCCESS[39m
TOTAL: 3 SUCCESS
Done in 15.89s.
```
