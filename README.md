# Chansole

**Chansole** is a module that allow you to use multiple instances of the Console.

## Usage

> Be aware that chansole works only in a browser

First, install chansole via npm or yarn:

`npm install --save chansole`

`yarn add chansole`

then import it and create your channels:

```js
import channel from 'chansole';

const consoleA = channel('channelA');
const consoleB = channel('channelB');

conosleA.log('Hello, A');
conosleB.log('Hello, B');
```

*channel* method in the example returns a native browser's console instance, so you can use full abilities of his API

## License
MIT
