export default async function fetchJsonData(url) {
	try {
		const response = await fetch(url);
		if(!response.ok) {
			throw new Error(`HTTP error! status: ${response.status} on ${response.url}`)
		}
		const dataJson = await response.json();
		return dataJson
	}
	catch(error) {
		const name = document.querySelector('[data-profile-card-name]');
		if(name){
			name.textContent = 'Error fectching data';
		}
		console.error('Error fectching JSON', error, url)
	}
}