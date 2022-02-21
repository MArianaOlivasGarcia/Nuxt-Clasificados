const helpers ={}

// // Format url
// helpers.normalize = (function() {
// 	var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç"
// 	var to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc"
// 	var mapping = {};
	
// 	for(var i = 0, j = from.length; i < j; i++ ){
// 		mapping[ from.charAt( i ) ] = to.charAt( i );
// 	}
	
// 	return function(str) {
// 		var ret = [];
// 		for( var i = 0, j = str.length; i < j; i++ ) {
// 			var c = str.charAt(i);
// 			if(Object.prototype.hasOwnProperty.call(str.charAt(i))){
// 				ret.push( mapping[c]);
// 			}else{
// 				ret.push( c );
// 			}
// 		}      
// 		return ret.join('').replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
// 	}
// })()

helpers.normalize = ( str ) => {
	return str.trim()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '-')
			.replace(/:/g, '')
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