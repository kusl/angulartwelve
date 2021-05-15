#!/bin/bash

cd ~/src/angular/angulartwelve/;
date > README.md;
git add .;
git commit -m "add timestamp";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin add system status";
echo "System Memory" >> README.md;
free -h >> README.md;
echo "System Storage" >> README.md;
du -sh .>> README.md;
git add .;
git commit -m "add system status";
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end add system status";


echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin update node";
time nvm install --lts;
time nvm use --lts;
time npm install --global @angular/cli yarn;
time yarn run ng --version >> README.md;
time yarn >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end update node";

export NODE_OPTIONS="--max-old-space-size=6144";

git add .;
git commit -m "begin prepare to update angular";
time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize @angular/pwa;
git add .;
git commit -m "end prepare to update angular";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin prepare to build angular";
time yarn run ng build --configuration production >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end prepare to build angular";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin prepare to unit test angular";
time yarn run ng test >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end prepare to unit test angular";

date >> README.md;
git add .;
git commit -m "add timestamp";
git pull --rebase origin master --strategy-option=ours;
git add .;
git commit -m "merge from remote";
git push origin master;


du -sh dist/angulartwelve/;
time rsync -av /home/kushal/src/angular/angulartwelve/dist/angulartwelve/ /home/kushal/src/angular/angulrtwelvegithubio;
du -sh /home/kushal/src/angular/angulrtwelvegithubio;
cd /home/kushal/src/angular/angulrtwelvegithubio/;
git add .;
git commit -m "build and deploy";
time git push origin master;
