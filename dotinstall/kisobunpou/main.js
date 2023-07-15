'use strict';//javascriptでよくない書き方をしている時にエラーを出してくれる厳格モードで動作する。必ず先頭に書く。

const color = prompt('Color?');
switch (color) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Slow down!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Wrong Color!')
    break;
}