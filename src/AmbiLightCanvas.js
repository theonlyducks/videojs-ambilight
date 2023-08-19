import videojs from 'video.js';

const Component = videojs.getComponent('Component');

export class AmbiLightCanvas extends Component {

	constructor(player, options) {
		super(player, options);
		this.plugin = options.plugin;
	}

	createEl() {
		const player = this.player().el();
		const canvas = videojs.dom.createEl('div', {
			className: 'vjs-ambilight--canvas',
		});
		canvas.innerHTML = `
			<canvas id="ambilight" width="${player.offsetWidth}" height="${player.offsetHeight}"></canvas>
		`;
		return canvas;
	}

}
