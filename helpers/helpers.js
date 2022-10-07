const helpers = {}


helpers.normalize = ( str ) => {
	return str.trim()
			.normalize('NFD')
			.replace(/,/g, '')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '-')
			.replace(/:/g, '')
			.replace('.', '')
			.replace('/', '')
			.replace(/[/]/g, '')
			.toLowerCase()
}



helpers.normalizeUbications = ( str ) => {
	return str.trim()
			.normalize('NFD')
			.replace(/,/g, '')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '-')
			.replace(/:/g, '')
			.replace('/', '')
			.replace('.', '')
			.toLowerCase()
}



helpers.fistLetterUpperCase = ( str ) => {
	return str.split('_')[0]
		.replace(/-/g, ' ')
		.trim()
		.split(' ')
		.map( v => v[0].toUpperCase() + v.substr(1) )
		.join(' ');  
}

export default helpers;