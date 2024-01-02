import videojs from 'video.js';
import packageJson from '../package.json';

import { AmbiLightCanvas } from './AmbiLightCanvas';

const { version: VERSION } = packageJson;

const Plugin = videojs.getPlugin('plugin');

const DEFAULT_OPTIONS = {
	fps: 15,
	scale: 1,
	blur: 80,
	opacity: 1,
	saturate: 300
}

class AmbiLightPlugin extends Plugin {

	constructor(player, options = {}) {
		super(player);
		this.player = player;
		this.options = options;
		this.intervalId = null;
		videojs.log('AmbiLight plugin start ', options);
		player.on('loadeddata', () => {
			player.addChild('AmbiLightCanvas', { plugin: this, state: this.state });
			this.drawFrame();
		});
		player.on('play', () => {
			this.startAmbilight();
		});
		player.on('pause', () => {
			this.stopAmbilight();
		});
		player.on('ended', () => {
			this.stopAmbilight();
		});
	}

	startAmbilight() {
		this.intervalId = window.setInterval(this.drawFrame.bind(this), 1000 / this.options.fps);
	}

	stopAmbilight() {
		clearInterval(this.intervalId);
	}

	drawFrame() {
		const [ video ] = this.player.children();
		const canvas = document.getElementById('ambilight');
		const context = canvas.getContext('2d');
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
	}

	handleStateChanged(event ) { }
}

AmbiLightPlugin.defaultState = {};
AmbiLightPlugin.VERSION = VERSION;

videojs.registerComponent('AmbiLightCanvas', AmbiLightCanvas);
videojs.registerPlugin('ambiLightPlugin', AmbiLightPlugin);
export default AmbiLightPlugin;
