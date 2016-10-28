function register(){
		var dataToBePosted = {'token' : 'e0b8234113e331c438e865abf28d7195' , 'github': 'https://github.com/Bonsa-Tilahun/code2040-api-challenge' }
	
		$.ajax({
    		type: 'POST',
    		url: 'http://challenge.code2040.org/api/register',
    		data: JSON.stringify(dataToBePosted),
    		contentType: 'application/json; charset=utf-8',
    		dataType: 'json',
    		success: function(data){ console.log(data) }
		});
	}