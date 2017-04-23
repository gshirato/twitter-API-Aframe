var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
//For parameters in params
var word = '#france'
var cparams = 3;


var expdata_Pos = function()
{
	var params = {
		q: word + ' :)',
		//result_type: 'popular',
		count: cparams
	};
	Twitter.get('search/tweets', params, function(err,data,res){
		if(!err)
		{

			var data_length = data.statuses.length;
			console.log("\n[Positive Tweets]: " + data_length);
			
			if(res)
			{
				var databox_p = new Array();
				
				for(var i = 0; i < data_length; i++)
				{
					databox_p[i] = new Array();
					//console.log(data.statuses[0]);
					//name
					databox_p[i][0] = data.statuses[i].user.name;
					//fav
					databox_p[i][1] = data.statuses[i].favorite_count;
					//RT		
					databox_p[i][2] = data.statuses[i].retweet_count;
					//Followers
					databox_p[i][3] = data.statuses[i].user.followers_count;					
					console.log('[user name]: '+databox_p[i][0]);
					console.log('[Fav]: '+databox_p[i][1]);
					console.log('[RT]: '+databox_p[i][2]);
					console.log('[followers]: '+databox_p[i][3] +'\n');
				}
				require('./lib/share').databox = databox_p;
				exports.pos = databox_p;
				console.log (exports.pos);
				var func = require('./sub');
				func.init();
			}

		}
		else
		{
			console.log('not found');
		}

	});


}

var expdata_Neg = function()
{
	var params = {
		q: word + ' :(',
		//result_type: 'popular',
		count: cparams
	};
	Twitter.get('search/tweets', params, function(err,data,res){
		if(!err)
		{

			var data_length = data.statuses.length;
			console.log("[Negative Tweets]: " + data_length);
			
			if(res)
			{
				var databox_n = new Array();
				
				for(var i = 0; i < data_length; i++)
				{
					databox_n[i] = new Array();
					//console.log(data.statuses[0]);
					//name
					databox_n[i][0] = data.statuses[i].user.name;
					//fav
					databox_n[i][1] = data.statuses[i].favorite_count;
					//RT		
					databox_n[i][2] = data.statuses[i].retweet_count;
					//Followers
					databox_n[i][3] = data.statuses[i].user.followers_count;					
					console.log('[user name]: '+databox_n[i][0]);
					console.log('[Fav]: '+databox_n[i][1]);
					console.log('[RT]: '+databox_n[i][2]);
					console.log('[followers]: '+databox_n[i][3] +'\n');
				}

			exports.neg = databox_n;
			console.log (exports.neg);
			}

		}
		else
		{
			console.log('not found');
		}

	});
}

expdata_Pos();
expdata_Neg();
