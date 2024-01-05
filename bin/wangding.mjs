#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import {setTimeout} from 'timers/promises';

const {log, clear} = console;

let me = {
  name: '王顶',
  QQ: '408542507',
  Email: 'w.ding@qq.com',
  Github: 'https://github.com/wangding/',
  Bitbucket: 'https://Bitbucket.org/wngding',
  bilibili: 'https://space.bilibili.com/420780095',
};

me = Object
  .entries(me)
  .map(([k, v]) => (k+':').padEnd(12, ' ') + v)
  .join('\n');

const slogan = chalk
  .magentaBright(figlet
    .textSync('Wang Ding', {horizontalLayout: 'full'}))
  .split('\n');

me = slogan.concat(['\n\n', me]);

clear();

(async () => {
for(let i= 0; i<me.length; i++) {
  await setTimeout(400);
  log(me[i]);
}})();
