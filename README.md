# motion-email
Detect motion -> send email

## Introduction
Detect motion using a webcam and a linux machine.
Send image snapshots via email.
Can be used as a security camera or surveilance system for your home or office.
Easy to set up, just need an old computer and an internet connection.

## Requirements
- Any Linux machine with a built-in webcam
- An email account
- Node version 4.x
- Motion version 3.2.12


## Installation on Ubuntu

### Motion 
````
$ sudo apt-get install motion
````

### Node
````
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
````

### pm2
````
$ sudo npm i -g pm2
````

### motion-email
````
$ mkdir motion-email
$ cd motion-email
$ npm install https://github.com/pedroposada/motion-email
````


## Configure
Make a copy of ```local.json.dist``` into ```local.json```
Replace the value accordingly


## Run
Inside your folder
Start 'motion' as daemon using the config file provided here.
Motion will automatically start your webcam and take a picture everytime changes in light and color are detected.
````
$ motion -c ./motion.conf
````
Start the node app as a daemon using pm2
````
$ pm2 start index.js -n "motion-email"
````

## Done!

### to stop motion
````
$ top | grep motion
$ kill PID // where PID is the number that appears on the left
````

### to stop node
````
$ pm2 stop "motion-email"
````

### troubleshooting notes
if node is not working properly try this
````
$ sudo apt-get remove --purge node
$ sudo apt-get clean
````
and re-install again


