#!/bin/sh
apt update -y
apt upgrade -y
apt install nodejs -y
apt install npm -y
apt install git
# to run inside dir
# npm install express sequelize mysql2 body-parser cors --save
# npm i nodemon -D