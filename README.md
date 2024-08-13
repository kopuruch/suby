## Stable version node
* ```v18.16.0```
## Stable version npm
* ```9.5.1```

## Local development
* ```install nodejs and npm```
* ```npm i```
* ```npm run dev```

## How build SSR for Dev (Manual)
* ```npm i```
* ```npm run build:dev```
* ```pm2 status``` // check field "name", for example "app"
* ```pm2 restart app```

## How build SSR for Prod (Manual)
* ```npm i```
* ```npm run build:main```
* ```pm2 status``` // check field "name", for example "app"
* ```pm2 restart app```

## Details
* ```pm2``` — keeping Node always running. Instead of ```pm2``` can be ```systemD```. If ```Node``` run down then ```pm2``` automatically restart project instance.

* ```pm2 status``` — name ```field``` not necessarily. If you don't write the name for init you can go to a folder with a project and run the command for start ```pm2 start npm -- start``` or ```pm2 start npm --name "myApp" -- run start```. Second command you named your init "myApp". Now, you can a running project command like this ```pm2 restart myApp``` and you don't need to open a folder with your project.

