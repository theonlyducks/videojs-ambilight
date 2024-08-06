import videojs from 'video.js';
import packageJson from '../package.json';

import { AmbiLightCanvas } from './AmbiLightCanvas';

const { version: VERSION } = packageJson;

const Plugin = videojs.getPlugin('plugin');

const DEFAULT_OPTIONS = {
	fps: 15,
	blur: 50,
	scale: 1,
	opacity: 1,
	saturate: 200
}

class AmbiLightPlugin extends Plugin {

	constructor(player, options = {}) {
		super(player);
		this.player = player;
		this.options = Object.assign(DEFAULT_OPTIONS, options);
		this._validateOptions();
		this.intervalId = null;
		videojs.log('[~AmbiLight Plugin] start ', options);
		player.on('loadeddata', () => {
			player.addChild('AmbiLightCanvas', { plugin: this, options: this.options });
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

	_validateOptions() {
		this.options.fps = Math.max(15, Math.min(120, this.options.fps));
		this.options.blur = Math.max(10, Math.min(100, this.options.blur));
		this.options.scale = Math.max(1, Math.min(1.9, this.options.scale));
		this.options.opacity = Math.max(0, Math.min(1, this.options.opacity));
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
