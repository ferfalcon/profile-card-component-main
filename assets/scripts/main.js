import loadData from './async-fetch-json-data.js';
import printJsonObject from './print-json-object.js';

const dataUrl = './assets/json-data/data.json';

loadData(dataUrl)
	.then (data => {
		printJsonObject(data);
	})