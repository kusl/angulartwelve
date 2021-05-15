$ cd ~/src/angular; time ng new angulartwelve --package-manager=yarn --verbose=true --routing=true --style=scss --view-encapsulation=ShadowDom
CREATE angulartwelve/README.md (1003 bytes)
CREATE angulartwelve/.editorconfig (274 bytes)
CREATE angulartwelve/.gitignore (604 bytes)
CREATE angulartwelve/angular.json (3294 bytes)
CREATE angulartwelve/package.json (1075 bytes)
CREATE angulartwelve/tsconfig.json (783 bytes)
CREATE angulartwelve/.browserslistrc (703 bytes)
CREATE angulartwelve/karma.conf.js (1430 bytes)
CREATE angulartwelve/tsconfig.app.json (287 bytes)
CREATE angulartwelve/tsconfig.spec.json (333 bytes)
CREATE angulartwelve/src/favicon.ico (948 bytes)
CREATE angulartwelve/src/index.html (299 bytes)
CREATE angulartwelve/src/main.ts (448 bytes)
CREATE angulartwelve/src/polyfills.ts (2820 bytes)
CREATE angulartwelve/src/styles.scss (80 bytes)
CREATE angulartwelve/src/test.ts (743 bytes)
CREATE angulartwelve/src/assets/.gitkeep (0 bytes)
CREATE angulartwelve/src/environments/environment.prod.ts (51 bytes)
CREATE angulartwelve/src/environments/environment.ts (658 bytes)
CREATE angulartwelve/src/app/app-routing.module.ts (245 bytes)
CREATE angulartwelve/src/app/app.module.ts (393 bytes)
CREATE angulartwelve/src/app/app.component.scss (0 bytes)
CREATE angulartwelve/src/app/app.component.html (23809 bytes)
CREATE angulartwelve/src/app/app.component.spec.ts (1078 bytes)
CREATE angulartwelve/src/app/app.component.ts (218 bytes)
✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
    Successfully initialized git.

real    0m35.500s
user    0m23.352s
sys     0m6.680s

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
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1200.0
@angular-devkit/build-angular   12.0.0
@angular-devkit/core            12.0.0
@angular-devkit/schematics      12.0.0
@schematics/angular             12.0.0
rxjs                            6.6.7
typescript                      4.2.4

Done in 0.86s.

real    0m1.057s
user    0m0.992s
sys     0m0.137s

[kushal@april87 angulartwelve]$ time yarn run ng add @angular/material @angular/pwa
yarn run v1.22.10
$ ng add @angular/material @angular/pwa
ℹ Using package manager: yarn
✔ Found compatible package version: @angular/material@12.0.0.
✔ Package information loaded.

The package @angular/material@12.0.0 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
Unknown option: '@angular/pwa'
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

real    0m14.421s
user    0m8.886s
sys     0m1.473s
[kushal@april87 angulartwelve]$ time yarn run ng add @angular/material
yarn run v1.22.10
$ ng add @angular/material
Skipping installation: Package already installed
? Choose a prebuilt theme name, or "custom" for a custom theme: Purple/Green       [ Preview: https://material.angular.io?theme=purple-green ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
UPDATE package.json (1139 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (502 bytes)
UPDATE angular.json (3460 bytes)
UPDATE src/index.html (581 bytes)
UPDATE src/styles.scss (181 bytes)
Done in 44.31s.

real    0m44.506s
user    0m9.100s
sys     0m1.392s

[kushal@april87 angulartwelve]$ time yarn run ng add @angular/pwa
yarn run v1.22.10
$ ng add @angular/pwa
ℹ Using package manager: yarn
✔ Found compatible package version: @angular/pwa@latest.
✔ Package information loaded.

The package @angular/pwa will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
Option "configuration" is deprecated: No longer has an effect.
CREATE ngsw-config.json (624 bytes)
CREATE src/manifest.webmanifest (1350 bytes)
CREATE src/assets/icons/icon-128x128.png (1253 bytes)
CREATE src/assets/icons/icon-144x144.png (1394 bytes)
CREATE src/assets/icons/icon-152x152.png (1427 bytes)
CREATE src/assets/icons/icon-192x192.png (1790 bytes)
CREATE src/assets/icons/icon-384x384.png (3557 bytes)
CREATE src/assets/icons/icon-512x512.png (5008 bytes)
CREATE src/assets/icons/icon-72x72.png (792 bytes)
CREATE src/assets/icons/icon-96x96.png (958 bytes)
UPDATE angular.json (3629 bytes)
UPDATE package.json (1181 bytes)
UPDATE src/app/app.module.ts (898 bytes)
UPDATE src/index.html (767 bytes)
✔ Packages installed successfully.
Done in 19.15s.

real    0m19.350s
user    0m12.560s
sys     0m2.357s
Sat May 15 08:35:28 AM MDT 2021
