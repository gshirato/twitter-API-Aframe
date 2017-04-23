/*
imgName: ID of image
sizez, sizey
r_min, r_max: min/max of radius
num: number of images
*/

var databox = require('./posneg.js');


function generateStars(imgName, sizex, sizey, r_max, r_min, num)
{
	let theta1, theta2;
	let radius1, radius2;
	let tmp;

	//generate stars
	let scene = document.querySelector("a-scene");
	for(let i = 0; i< num; i++)
	{
		theta1 = random(0,360);
		theta2 = random(0,360);

		let star = document.createElement('a-image');
		star.setAttribute('src',imgName);
		star.setAttribute('width', sizex);
		star.setAttribute('height', sizey);
		star.setAttribute('look-at', '#target');
		radius1 = r_min;
		let y = radius1 * Math.sin(deg2rad(theta1));
		radius2 = radius1 * Math.cos(deg2rad(theta1));
		let x = radius2 * Math.cos(deg2rad(theta2));
		let z = radius2 * Math.sin(deg2rad(theta2));
		let str = String(x)+ " " + String(y)+ " " + String(z);
		star.setAttribute('position', str);
		scene.appendChild(star);
	}
}

function setup()
{
	var tw = require('./posneg').pos;
	console.log('tw: ' + tw);
	generateStars('#star', '30', '30', 700, 1000, 500)
}

exports.init = function init(){
	setup();
}