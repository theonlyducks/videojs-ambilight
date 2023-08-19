import 'video.js/dist/video-js.css';

import videojs from "video.js";

import '../src/plugin.css';
import '../src/plugin.js';

window.onload = () => {
	const video = videojs('my-video');
	video.ambiLightPlugin();
}
