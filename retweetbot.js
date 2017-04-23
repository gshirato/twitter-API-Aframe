var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);


// find latest tweet according the query 'q' in params
var retweet = function(){
	var params = {
		q: '#NodeJS',
		result_type: 'recent'
		//lang: 'ja'
	};
	Twitter.get('search/tweets', params, function(err, data){
	//if no errors
	if(!err){
		// grab ID of tweet to retweet
		var retweetId = data.statuses[0].id_str;
		// Tell Twitter to retweet
		Twitter.post('statuses/retweet/:id',{
			id: retweetId
		}, function(err,response){
			if(response){
				console.log(response); 
				console.log(data.statuses[0].id_str);
				console.log(data.statuses[0].retweeted_status.user.name); 
				console.log('Retweeted!!');
			}
			// error while tweeting
			if(err){
				// if Read Only ... 
				console.log('Error while tweeting');
			}
		});
	}
	//if unable to searche a tweet
	else
	{
		console.log('tweet not found');
	}
	});
}
retweet();


