export default function printJsonObject(jsonObject) {
	if(jsonObject){
		console.log(jsonObject)
		const image = document.querySelector('[data-profile-card-image]');
		if(image) {
			image.setAttribute('src', jsonObject.imageUrl);
			image.setAttribute('alt', jsonObject.name)
		}
	
		const name = document.querySelector('[data-profile-card-name]');
		if(name){
			name.textContent = jsonObject.name;
		}
	
		const age = document.querySelector('[data-profile-card-age]');
		if(age) {
			age.textContent = jsonObject.age;
		}
	
		const location = document.querySelector('[data-profile-card-location]');
		if(location){
			location.textContent = jsonObject.location;
		}
	
		let statsMarkup = '';
		if (jsonObject.stats) {
			jsonObject.stats.forEach(stat => {
				const value = stat.value/1000 + 'k';
				statsMarkup += `
					<div class="profile-card__stat-col">
						<dt class="profile-card__label">${stat.label}</dt>
						<dd class="profile-card__value">${value}</dd>
					</div>
				`;
			});
		}
	
		document.querySelector('[data-profile-stats]').innerHTML = statsMarkup;
	}
}