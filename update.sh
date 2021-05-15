#!/bin/bash

cd ~/src/angular/angulartwelve/;
free -h;
export NODE_OPTIONS="--max-old-space-size=6144";
echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin prepare to update angular";
time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end prepare to update angular";
date >> README.md;
git pull --rebase origin master --strategy-option=ours;
git push origin master;
time yarn run ng build --configuration production;
time yarn run ng test;
