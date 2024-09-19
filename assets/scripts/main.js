import loadData from './async-fetch-json-data';
import printJsonObject from './print-json-object';

const dataUrl = './assets/json-data/data.json';

loadData(dataUrl)
	.then (data => {
		printJsonObject(data);
	})