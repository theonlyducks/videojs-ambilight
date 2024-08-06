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

## Getting started

### Requirements

- With npm `npm install video.js`
- With yarn `yarn add video.js`

### Installation

- With npm `npm install @theonlyducks/videojs-ambilight@latest`
- With yarn `yarn add @theonlyducks/videojs-ambilight@latest`

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
	blur: 80,
	scale: 1.1,
	opacity: .9,
	saturate: 200
});
```

- `fps` frames per second to change the border color. default `15`
  - min: 15 
  - max: 120
- `blur` px amount of edge blur. default `50`
  - min: 10
  - max: 100
- `scale` image scale size. default `1`
  - min: 1
  - max: 1.9
- `opacity` amount that will be visible from the edge. default `1`
  - min: 0
  - max: 1
- `saturate` quantity in percentage of how much saturation the edge will have. default `200`

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
