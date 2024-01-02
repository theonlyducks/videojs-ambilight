# Video.js AmbiLight

> Simple plugin ambilight effect in video.js player

<img src="./preview.png" width="500" height="auto" alt="Preview">

## Table of contents

- [Documentation](#documentation)
- [Getting started](#getting-started)
- [Options](#options)
- [Development](#development)
- [License](#license)

## Documentation

See

## Getting started

### Requirements

```shell
yarn add video.js
```

### Installation

```shell
npm install @theonlyducks/videojs-ambilight@latest
```
```shell
 yarn add @theonlyducks/videojs-ambilight@latest
```

### Usage

```js
import '@theonlyducks/videojs-ambilight/styles';
import '@theonlyducks/videojs-ambilight';
```

#### Example

```js
const video = videojs('my-video');
video.ambiLightPlugin();
```

## Options

Example:
```js
video.ambiLightPlugin({
	fps: 60,
	blur: 60,
	opacity: 0.9,
	saturate: 200
});
```

- `fps` frames per second to change the border color. default `15`
- `blur` px amount of edge blur. default `80`
- `opacity` amount that will be visible from the edge. default `1`
- `saturate` quantity in percentage of how much saturation the edge will have. default `300`

## Development

Install

```shell
yarn
```

Start server listening http://localhost:3000

```shell
yarn start
```

## License

[MIT](https://opensource.org/licenses/MIT) © [The Only Ducks](https://github.com/theonlyducks)
