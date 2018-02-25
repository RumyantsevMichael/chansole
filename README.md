# Chansole

**Chansole** is a module that allow you to use multiple instances of the Console.

## Usage

> Be aware that chansole works only in a browser

First, install chansole using npm or yarn:

`npm install --save chansole`

`yarn add chansole`

then import it and create your channels:

```js
import channel from 'chansole';

const consoleA = channel('channelA');
const consoleB = channel('channelB');

consoleA.log('Hello, A');
consoleB.log('Hello, B');
```

`channel` method in the example returns the native browser's console instance, so you can use all features of its API

## Browser settings
### Google Chrome and Chromium

Open the DevTools **Console Settings** and check the **Selected context only** checkbox

![Check "Selected context only" checkbox](/screenshots/chromeStep1.bmp?raw=true "Check \"Selected context only\" checkbox")

Select a context

![Select a context](/screenshots/chromeStep2.bmp?raw=true "Select a context")

Now you'll see messages in the selected context only

![Profit](/screenshots/chromeStep3.bmp?raw=true)

### Mozilla Firefox

Open the DevTools **Settings** and check the **Select an iframe as the currently targeted document** checkbox

![Check "Select an iframe as the currently targeted document" checkbox](/screenshots/firefoxStep1.png?raw=true "Check \"Select an iframe as the currently targeted document\" checkbox")

Select a context

![Select a context](/screenshots/firefoxStep2.png?raw=true "Select a context")

## License
MIT
