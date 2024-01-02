import videojs from 'video.js';

const Component = videojs.getComponent('Component');

const DEFAULT_STATE = {
	blur: 80,
	opacity: 1,
	saturate: 300
}

export class AmbiLightCanvas extends Component {

	constructor(player, options) {
		super(player, options);
	}

	createEl(tagName, properties, attributes) {
		const player = this.player().el();
		const canvas = videojs.dom.createEl('div', {
			className: 'vjs-ambilight--canvas',
		});
		canvas.innerHTML = `
			<canvas 
				id="ambilight" 
				width="${player.offsetWidth}" 
				height="${player.offsetHeight}" 
				style="filter: blur(80px) opacity(1) saturate(300%)"
			></canvas>
		`;
		return canvas;
	}

	buildCSSClass() {
		return "";
	}

	handleLanguagechange() { }

}
