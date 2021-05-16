Sun May 16 05:29:06 PM MDT 2021
```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.7Gi       3.5Gi       8.0Mi       2.4Gi       5.7Gi
Swap:          7.7Gi          0B       7.7Gi
System Storage
378M	.
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
    
Done in 0.95s.
yarn install v1.22.10
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.80s.
```
```bash
yarn run v1.22.10
$ ng build --configuration production

Initial Chunk Files               | Names         |      Size
main.83a5446e072814022521.js      | main          | 551.33 kB
styles.ec85c89c6834e629bb3f.css   | styles        |  73.89 kB
polyfills.405a01d84840a1e5b047.js | polyfills     |  36.58 kB
runtime.3de57b8d40632216d729.js   | runtime       |   1.35 kB

| Initial Total | 663.16 kB

Build at: 2021-05-16T23:30:24.899Z - Hash: 60aa3bf631920cb7a10e - Time: 57037ms
Done in 60.83s.
```
```bash
yarn run v1.22.10
$ ng test
16 05 2021 17:30:33.560:INFO [karma-server]: Karma v6.3.2 server started at http://localhost:9876/
16 05 2021 17:30:33.562:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 05 2021 17:30:33.566:INFO [launcher]: Starting browser Firefox
16 05 2021 17:30:44.663:INFO [Firefox 88.0 (Fedora 0.0.0)]: Connected on socket xuahX_mGuV8Iui9pAAAB with id 47643831
Firefox 88.0 (Fedora 0.0.0): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.073 secs)
[1A[2KERROR: [36m'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.073 secs)
ERROR: 'NG0304: 'mat-icon' is not a known element:
1. If 'mat-icon' is an Angular component, then verify that it is part of this module.
2. If 'mat-icon' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.101 secs)
[1A[2KERROR: [36m'NG0304: 'app-navigation-bar' is not a known element:
1. If 'app-navigation-bar' is an Angular component, then verify that it is part of this module.
2. If 'app-navigation-bar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 88.0 (Fedora 0.0.0): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.101 secs)
ERROR: 'NG0304: 'app-navigation-bar' is not a known element:
1. If 'app-navigation-bar' is an Angular component, then verify that it is part of this module.
2. If 'app-navigation-bar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2K[31mFirefox 88.0 (Fedora 0.0.0) HomeComponent should create FAILED[39m
	Error: Function not implemented. in main.js (line 174)
	sayHello@main.js:174:15
	ngOnInit@main.js:171:14
	callHook@vendor.js:40582:22
	callHooks@vendor.js:40551:25
	executeInitAndCheckHooks@vendor.js:40502:18
	refreshView@vendor.js:47512:45
	renderComponentOrTemplate@vendor.js:47611:20
	tickRootContext@vendor.js:48842:34
	detectChangesInRootView@vendor.js:48867:20
	detectChanges@vendor.js:60905:32
	_tick@vendor.js:71381:32
	detectChanges/<@vendor.js:71394:22
	invoke@polyfills.js:601:26
	onInvoke@vendor.js:87230:39
	invoke@polyfills.js:600:52
	onInvoke@vendor.js:66714:33
	invoke@polyfills.js:600:52
	run@polyfills.js:363:43
	run@vendor.js:66568:28
	detectChanges@vendor.js:71393:25
	7263/</<@main.js:138:13
	invoke@polyfills.js:601:26
	onInvoke@vendor.js:87230:39
	invoke@polyfills.js:600:52
	run@polyfills.js:363:43
	runInTestZone@vendor.js:87510:34
	wrapTestInZone/<@vendor.js:87525:20
	<Jasmine>
	invoke@polyfills.js:601:26
	run@polyfills.js:363:43
	scheduleResolveOrReject/<@polyfills.js:1505:36
	invokeTask@polyfills.js:635:31
	runTask@polyfills.js:407:47
	drainMicroTaskQueue@polyfills.js:811:35
Firefox 88.0 (Fedora 0.0.0): Executed 3 of 3[31m (1 FAILED)[39m (0 secs / 0.13 secs)
Firefox 88.0 (Fedora 0.0.0) HomeComponent should create FAILED
	Error: Function not implemented. in main.js (line 174)
	sayHello@main.js:174:15
	ngOnInit@main.js:171:14
	callHook@vendor.js:40582:22
	callHooks@vendor.js:40551:25
	executeInitAndCheckHooks@vendor.js:40502:18
	refreshView@vendor.js:47512:45
	renderComponentOrTemplate@vendor.js:47611:20
	tickRootContext@vendor.js:48842:34
	detectChangesInRootView@vendor.js:48867:20
	detectChanges@vendor.js:60905:32
	_tick@vendor.js:71381:32
	detectChanges/<@vendor.js:71394:22
	invoke@polyfills.js:601:26
	onInvoke@vendor.js:87230:39
	invoke@polyfills.js:600:52
	onInvoke@vendor.js:66714:33
	invoke@polyfills.js:600:52
	run@polyfills.js:363:43
	run@vendor.js:66568:28
	detectChanges@vendor.js:71393:25
	7263/</<@main.js:138:13
	invoke@polyfills.js:601:26
	onInvoke@vendor.js:87230:39
	invoke@polyfills.js:600:52
	run@polyfills.js:363:43
	runInTestZone@vendor.js:87510:34
	wrapTestInZone/<@vendor.js:87525:20
	<Jasmine>
	invoke@polyfills.js:601:26
	run@polyfills.js:363:43
	scheduleResolveOrReject/<@polyfills.js:1505:36
	invokeTask@polyfills.js:635:31
	runTask@polyfills.js:407:47
	drainMicroTaskQueue@polyfills.js:811:35
[1A[2KFirefox 88.0 (Fedora 0.0.0): Executed 3 of 3[31m (1 FAILED)[39m (0.179 secs / 0.13 secs)
[31mTOTAL: 1 FAILED, 2 SUCCESS[39m
TOTAL: 1 FAILED, 2 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Sun May 16 05:30:45 PM MDT 2021
Sun May 16 05:32:18 PM MDT 2021
