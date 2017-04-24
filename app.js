//For parameters in params
var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	fs = require('fs');
app.listen(1994);


var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);


function handler(req,res){
	fs.readFile(__dirname+'/index.html',function(err,data){
		if(err){
			res.writeHead(500);
			return res.end('Error');
		}
		res.writeHead(200);
		res.write(data);
		res.end();
	});
}

var word = '#france'
var cparams = 3;

//Les données partagées
/*
var pos = io.of('/pos').on('connection',function(socket){
*/

	function expdata_Pos()
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
				/*
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
					*/
					if(res)
					{
						var databox_p = 
						{
							name: '',
							fav: 0,
							rt: 0,
							followers:0
						};
						for(var i = 0; i < data_length; i++)
						{
							databox_p.name = data.statuses[i].user.name;
							databox_p.fav = data.statuses[i].favorite_count;
							databox_p.rt = data.statuses[i].retweet_count;
							databox_p.followers = data.statuses[i].user.followers_count;
							createCosmos(databox_p.fav,databox_p.rt,databox_p.followers,'pos');
							soccket.emit('efs', databox_p);
						}
					}
				

			}
			else
			{
				console.log('not found');
			}

		});


	}
/*	
})

var neg = io.of('/neg').on('connection',function(socket){
*/

	function expdata_Neg()
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
				console.log("\n[Negative Tweets]: " + data_length);
				/*
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
					*/
					if(res)
					{
						var databox_n = 
						{
							name: '',
							fav: 0,
							rt: 0,
							followers:0
						};
						for(var i = 0; i < data_length; i++)
						{
							databox_n.name = data.statuses[i].user.name;
							databox_n.fav = data.statuses[i].favorite_count;
							databox_n.rt = data.statuses[i].retweet_count;
							databox_n.followers = data.statuses[i].user.followers_count;
							createCosmos(databox_n.fav, databox_n.rt, databox_n.followers, 'neg');
							soccket.emit('efs', databox_n);
						}
					
				}

			}
			else
			{
				console.log('not found');
			}

		});


	}
/*
})
*/
/*
imgName: ID of image
sizez, sizey
r_min, r_max: min/max of radius
num: number of images
*/


function geneCosmos(fav, rt, followers, type)
{
	let theta1, theta2;
	let radius1, radius2;
	let score = (fav+rt) * followers /100;
	//generate stars
	let scene = document.querySelector('a-scene');
		theta1 = random(0,360);
		theta2 = random(0,360);

		let star = document.createElement('a-sphere');
		if(type==='pos')
		{
			star.setAttribute('color','#FF0000');
		}
		else
		{
			star.setAttribute('color','#0000FF');
		}
		star.setAttribute('radius',score);
		radius1 = 700;
		let y = radius1 * Math.sin(deg2rad(theta1));
		radius2 = radius1 * Math.cos(deg2rad(theta1));
		let x = radius2 * Math.cos(deg2rad(theta2));
		let z = radius2 * Math.sin(deg2rad(theta2));
		let str = String(x)+ " " + String(y)+ " " + String(z);
		star.setAttribute('position', str);
		scene.appendChild(star);
}


function setup()
{
	expdata_Pos();
	expdata_Neg();
}

function init()
{
	setup();
}

