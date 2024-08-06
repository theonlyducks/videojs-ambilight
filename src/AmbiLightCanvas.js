import videojs from 'video.js';

const Component = videojs.getComponent('Component');

export class AmbiLightCanvas extends Component {

	constructor(player, options) {
		super(player, options);
	}

	createEl(tagName, properties, attributes) {
		const { options: { blur, opacity, saturate, scale } } = this.options_;
		const player = this.player().el();
		const canvas = videojs.dom.createEl('div', {
			className: 'vjs-ambilight--canvas',
		});
		canvas.innerHTML = `
			<canvas 
				id="ambilight"
				width="${player.offsetWidth}" 
				height="${player.offsetHeight}" 
				style="
					filter: blur(${blur}px) opacity(${opacity}) saturate(${saturate}%); 
					transform: scale(${scale}) translateZ(0);
				"
			></canvas>
		`;
		return canvas;
	}

	buildCSSClass() {
		return "";
	}

	handleLanguagechange() { }

}
