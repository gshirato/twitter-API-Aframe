//Testin' Version

var config = require('../cfg/config.js');

var twit = require('twit'),
	Twitter = new twit(config);

var word = '#fr',
	params_c= 100;

var params = {
	q: word + ' :)',
	count: params_c
};
var pbox = 
{
	id:0,
	text:'',
	name: '',
	fav: 0,
	rt:0,
	followers:0
};

function starttw()
{
	Twitter.get('search/tweets',params, function(err,data,res){
		if(!err)
		{
			var data_length = data.statuses.length;
			console.log('\n[Positive Tweets]: ' + data_length);
			console.log('[hashtag]: '+word);


			if(res)
			{
				
				for(var i = 0; i < data_length; i++)
				{
					pbox.id = i;
					pbox.text = data.statuses[i].text;
					pbox.name = data.statuses[i].user.name;
					pbox.fav = data.statuses[i].favorite_count;
					pbox.rt = data.statuses[i].retweet_count;
					pbox.followers = data.statuses[i].user.followers_count;
					//geneCosmos(pbox.fav,pbox.rt,pbox.followers,0);
					console.log(pbox);
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
function geneCosmos(fav, rt, followers, type)
{
	let theta1, theta2;
	let radius1, radius2;
	let score = (fav+rt) * followers /1000;
	//generate stars
	let scene = document.querySelector('a-scene');
	let text = document.createElement('text');
	let target = document.querySelector('#target');
		theta1 = random(0,360);
		theta2 = random(0,360);

	let star = document.createElement('a-sphere');
		if(type==0)
		{
			star.setAttribute('color','#FF0000');
		}
		else
		{
			star.setAttribute('color','#0000FF');
		}
		text.setAttribute('value',score);
		
		star.setAttribute('radius',score/30);
		let mag = 200;
		radius1 = mag;
		let y = radius1 * Math.sin(deg2rad(theta1));
		radius2 = radius1 * Math.cos(deg2rad(theta1));
		let x = radius2 * Math.cos(deg2rad(theta2));
		let z = radius2 * Math.sin(deg2rad(theta2));
		let str = String(x)+ " " + String(y)+ " " + String(z);
		star.setAttribute('position', str);

		let anim = document.createElement('a-animation');
		anim.setAttribute('attribute', 'position');
		//anim.setAttribute('from','0 0 0');
		let _x = x/mag;
		let _y = y/mag;
		let _z = -10 + z/mag;
		let _str = String(_x)+ " " + String(_y)+ " " + String(_z);
		anim.setAttribute('to',_str);
		anim.setAttribute('repeat',5);
		anim.setAttribute('dur', 1000);
		anim.setAttribute('easing','ease-in-out');
		anim.setAttribute('direction','normal');
		anim.setAttribute('fill','both');

		scene.appendChild(star);
		star.appendChild(anim);

		let anim2 = document.createElement('a-animation');
		anim2.setAttribute('attribute', 'rotation');
		anim2.setAttribute('from','0 0 0');
		anim2.setAttribute('to','0 360 0');
		anim2.setAttribute('repeat','indefinite');
		anim2.setAttribute('dur', 20000);

}
*/

starttw();